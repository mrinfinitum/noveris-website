const dataTables = [
  {
    title: "Planets",
    rows: [
      ["ID", "Biome", "Signal", "Value"],
      ["VEY-04", "Ocean", "Gold zone", "92%"],
      ["EOS-11", "Gas giant", "Storm belt", "74%"],
      ["NAD-02", "Relic moon", "Ancient tech", "81%"],
    ],
  },
  {
    title: "Trade",
    rows: [
      ["Route", "Cargo", "Risk", "Yield"],
      ["Atlas-7", "Rare matter", "Low", "3.8x"],
      ["Inner Veil", "Bio-data", "Med", "2.4x"],
      ["Nadir Run", "Fuel lattice", "High", "5.1x"],
    ],
  },
  {
    title: "Labor",
    rows: [
      ["Unit", "Role", "Output", "State"],
      ["Crew-18", "Extractor", "+420/s", "Stable"],
      ["Guild-03", "Builder", "+18%", "Queued"],
      ["Synth-09", "Survey", "+7 finds", "Active"],
    ],
  },
  {
    title: "AI Agents",
    rows: [
      ["Agent", "Model", "Task", "Trust"],
      ["NOVA", "Planner", "Build order", "96%"],
      ["ORRERY", "Route AI", "Trade mesh", "89%"],
      ["SEED", "Bio AI", "Ecosystems", "93%"],
    ],
  },
  {
    title: "Resources",
    rows: [
      ["Type", "Source", "Use", "Rarity"],
      ["Crysalite", "Caves", "Research", "Rare"],
      ["Helium lattice", "Rings", "Fuel", "Epic"],
      ["Genome bloom", "Life", "Evolution", "Mythic"],
    ],
  },
];

const metrics = [
  ["12,480", "planet states"],
  ["418", "resource links"],
  ["64", "agent tasks"],
  ["8", "era layers"],
];

export function PitchDataSection() {
  return (
    <section className="pitch-data" aria-labelledby="pitch-data-title">
      <div className="pitch-data-copy">
        <p className="pitch-kicker">Driven by data</p>
        <h2 id="pitch-data-title">A living universe, rendered in detail and driven by data.</h2>
        <p>
          Planets, labor, trade lanes, resources, agents, events, and civilization
          choices all feed the same simulation layer. The art sells the fantasy;
          the data makes it playable for years.
        </p>
        <div className="pitch-data-metrics" aria-label="Simulation metrics">
          {metrics.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="pitch-data-console" aria-label="Representative game data tables">
        <div className="pitch-data-planet" aria-hidden="true">
          <img src="/media/pitch/exotic-scroll-planet.png" alt="" loading="lazy" decoding="async" />
        </div>
        {dataTables.map((table) => (
          <article className="pitch-data-table" key={table.title}>
            <h3>{table.title}</h3>
            <table>
              <thead>
                <tr>
                  {table.rows[0].map((cell) => (
                    <th key={cell}>{cell}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.slice(1).map((row) => (
                  <tr key={row.join("-")}>
                    {row.map((cell) => (
                      <td key={cell}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
        ))}
      </div>
    </section>
  );
}
