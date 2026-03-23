export default function Home() {
  const skills = [
    "TypeScript",
    "Next.js",
    "React",
    "Node.js",
    "UI Design",
    "Figma",
  ];

  const works = [
    {
      title: "Cafe Compass",
      summary:
        "街のカフェを地図と気分タグで探せるWebアプリ。検索体験を最優先に設計。",
      stack: ["Next.js", "Supabase", "Map API"],
    },
    {
      title: "Habit Beats",
      summary:
        "習慣化を音楽プレイリストと連動させたモバイルUI試作。毎日続く導線を検証。",
      stack: ["React Native", "Firebase", "UX Research"],
    },
    {
      title: "Portfolio Motion Kit",
      summary:
        "ポートフォリオ向けアニメーション部品集。読みやすさと軽快さの両立を重視。",
      stack: ["GSAP", "CSS", "Storybook"],
    },
  ];

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-8 md:px-10 md:py-14">
      <section className="section-card grid-dot shine relative overflow-hidden px-6 py-8 md:px-10 md:py-12">
        <div className="float-shape absolute -top-10 -right-10 h-36 w-36 rounded-full bg-[var(--surface-strong)] blur-md" />
        <div className="float-shape absolute -left-16 bottom-0 h-24 w-24 rounded-full bg-[var(--accent)]/20" />
        <p className="reveal mb-3 text-sm font-bold uppercase tracking-[0.24em] text-[var(--accent-2)]">
          Creative Developer
        </p>
        <h1 className="hero-title reveal max-w-3xl text-4xl md:text-6xl">
          トヨナガ コウシロウ
          <br />
          人の行動が変わる
          <br />
          体験をつくる。
        </h1>
        <p className="reveal mt-5 max-w-2xl text-base leading-8 md:text-lg">
          フロントエンドを中心に、企画からUI設計・実装まで横断して取り組むサンプルポートフォリオです。
          このページは Next.js で構築された初期例として、自己紹介・スキル・制作物の構成をまとめています。
        </p>
        <div className="reveal mt-6 flex flex-wrap gap-2">
          <span className="accent-pill">Tokyo, Japan</span>
          <span className="accent-pill">Frontend + UX</span>
          <span className="accent-pill">Open to Collaboration</span>
        </div>
      </section>

      <section className="section-card px-6 py-7 md:px-10 md:py-9">
        <h2 className="text-2xl md:text-3xl">About</h2>
        <p className="mt-3 text-sm leading-7 md:text-base md:leading-8">
          教育系スタートアップでのインターンを通して、学習者のモチベーション設計とダッシュボード改善を担当。
          定性インタビューから改善案を立て、プロトタイプ検証まで実施しました。
        </p>
      </section>

      <section className="section-card px-6 py-7 md:px-10 md:py-9">
        <h2 className="text-2xl md:text-3xl">Skills</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-lg border border-[var(--line)] bg-white px-3 py-2 text-sm font-semibold"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-card px-6 py-7 md:px-10 md:py-9">
        <h2 className="text-2xl md:text-3xl">Works</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {works.map((work) => (
            <article
              key={work.title}
              className="rounded-xl border border-[var(--line)] bg-white p-4"
            >
              <h3 className="text-xl">{work.title}</h3>
              <p className="mt-2 text-sm leading-7">{work.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {work.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-[var(--surface-strong)] px-3 py-1 text-xs font-bold"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card px-6 py-7 text-center md:px-10 md:py-9">
        <h2 className="text-2xl md:text-3xl">Contact</h2>
        <p className="mt-3 text-sm leading-7 md:text-base">
          sample@example.com
          <br />
          X / GitHub / LinkedIn への導線をここに追加できます。
        </p>
      </section>
    </main>
  );
}
