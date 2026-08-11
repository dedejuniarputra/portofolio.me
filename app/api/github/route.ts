import { NextResponse } from 'next/server';

export async function GET() {
  const username = 'dedejuniarputra';
  let publicRepos = 36;
  let followers = 25;
  let annualContributions = 640;
  let totalStars = 0;

  try {
    // 1. Fetch GitHub User Profile
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (userRes.ok) {
      const userData = await userRes.json();
      if (typeof userData.public_repos === 'number') {
        publicRepos = userData.public_repos;
      }
      if (typeof userData.followers === 'number') {
        followers = userData.followers;
      }
    }

    // 2. Fetch Contributions Count from GitHub html page
    const contribRes = await fetch(`https://github.com/users/${username}/contributions`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      },
      next: { revalidate: 3600 },
    });

    if (contribRes.ok) {
      const html = await contribRes.text();
      const match = html.match(/([\d,]+)\s+contributions\s+in\s+the\s+last\s+year/i);
      if (match && match[1]) {
        const count = parseInt(match[1].replace(/,/g, ''), 10);
        if (!isNaN(count)) {
          annualContributions = count;
        }
      }
    }

    // 3. Fetch Stars Count from GitHub user profile page
    const profileRes = await fetch(`https://github.com/${username}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      },
      next: { revalidate: 3600 },
    });

    if (profileRes.ok) {
      const html = await profileRes.text();
      const starMatch = html.match(/tab=stars[\s\S]*?Counter[^>]*>([\d,]+)</i);
      if (starMatch && starMatch[1]) {
        const parsedStars = parseInt(starMatch[1].replace(/,/g, ''), 10);
        if (!isNaN(parsedStars)) {
          totalStars = parsedStars;
        }
      }
    }

    // Fallback: If scraping didn't find totalStars, sum from repos API
    if (totalStars === 0) {
      const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        },
        next: { revalidate: 3600 },
      });

      if (reposRes.ok) {
        const repos = await reposRes.json();
        if (Array.isArray(repos)) {
          totalStars = repos.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);
        }
      }
    }
  } catch (error) {
    console.error('Error fetching realtime GitHub stats:', error);
  }

  return NextResponse.json({
    username,
    publicRepos,
    followers,
    annualContributions,
    totalStars,
  });
}
