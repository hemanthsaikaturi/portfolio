const GITHUB_USERNAME = "hemanthsaikaturi";

export const revalidate = 3600;

async function fetchContributions(token: string): Promise<{ commits: number; prs: number }> {
  try {
    const query = `
      query {
        user(login: "${GITHUB_USERNAME}") {
          contributionsCollection {
            totalCommitContributions
            totalPullRequestContributions
          }
        }
      }
    `;

    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "hemanthsaikaturi-portfolio",
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) return { commits: 0, prs: 0 };
    const json = await res.json();
    const collection = json?.data?.user?.contributionsCollection;
    return {
      commits: collection?.totalCommitContributions ?? 0,
      prs: collection?.totalPullRequestContributions ?? 0,
    };
  } catch {
    return { commits: 0, prs: 0 };
  }
}

export async function GET() {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "hemanthsaikaturi-portfolio",
    };

    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const [userRes, reposRes, orgsRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
        { headers, next: { revalidate: 3600 } }
      ),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/orgs`, {
        headers,
        next: { revalidate: 3600 },
      }),
    ]);

    if (!userRes.ok) {
      throw new Error(`GitHub API error: ${userRes.status}`);
    }

    const user = await userRes.json();
    const repos = await reposRes.json();
    const orgs = orgsRes.ok ? await orgsRes.json() : [];

    const totalForks = Array.isArray(repos)
      ? repos.reduce(
          (acc: number, repo: { forks_count: number }) =>
            acc + repo.forks_count,
          0
        )
      : 0;

    const totalStars = Array.isArray(repos)
      ? repos.reduce(
          (acc: number, repo: { stargazers_count: number }) =>
            acc + repo.stargazers_count,
          0
        )
      : 0;

    // Fetch contributions via GraphQL (requires token)
    const contributions = process.env.GITHUB_TOKEN
      ? await fetchContributions(process.env.GITHUB_TOKEN)
      : { commits: 0, prs: 0 };

    return Response.json({
      followers: user.followers ?? 0,
      following: user.following ?? 0,
      public_repos: user.public_repos ?? 0,
      totalForks,
      totalStars,
      totalCommits: contributions.commits,
      totalPRs: contributions.prs,
      avatar_url: user.avatar_url ?? "",
      name: user.name ?? GITHUB_USERNAME,
      login: user.login ?? GITHUB_USERNAME,
      bio: user.bio ?? "",
      company: user.company ?? "",
      blog: user.blog ?? "",
      location: user.location ?? "",
      organizations: orgs.map((org: any) => ({
        login: org.login,
        avatar_url: org.avatar_url,
        description: org.description,
      })),
    });
  } catch (error) {
    console.error("GitHub API fetch error:", error);
    return Response.json(
      { error: "Failed to fetch GitHub stats" },
      { status: 500 }
    );
  }
}
