import { SectionWrapper } from '../ui/SectionWrapper';
import { Badge } from '../ui/Badge';
import { privacyMatrix } from '../../data/privacyMatrix';

export function Privacy() {
  return (
    <SectionWrapper id="privacy" className="bg-zinc-950">
      <div className="text-center mb-12">
        <h2 className="font-pixel text-btc-orange text-sm sm:text-base leading-relaxed mb-4">
          Privacy & GDPR
        </h2>
        <p className="font-sans text-zinc-400 max-w-xl mx-auto">
          BTC Tracker processes no personal data. There is nothing to consent to and no data controller relationship established.
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {['No PII', 'No Analytics', 'No Account', 'No Cloud Sync', 'No Telemetry', 'GDPR Art. 4 — Not Applicable'].map(label => (
          <Badge key={label} label={label} variant="green" />
        ))}
      </div>

      {/* Data matrix */}
      <div className="overflow-x-auto rounded-2xl border border-zinc-800">
        <table className="w-full text-sm" role="table" aria-label="Privacy data matrix">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-900/50">
              <th className="text-left font-mono text-xs text-zinc-500 px-4 py-3" scope="col">Data Type</th>
              <th className="text-center font-mono text-xs text-zinc-500 px-4 py-3" scope="col">Stored Locally</th>
              <th className="text-center font-mono text-xs text-zinc-500 px-4 py-3" scope="col">Transmitted</th>
              <th className="text-left font-mono text-xs text-zinc-500 px-4 py-3 hidden md:table-cell" scope="col">Purpose / Notes</th>
            </tr>
          </thead>
          <tbody>
            {privacyMatrix.map((row, i) => (
              <tr key={i} className={`border-b border-zinc-800/50 ${i % 2 === 0 ? 'bg-zinc-900/20' : ''}`}>
                <td className="px-4 py-3 font-sans text-zinc-300">{row.dataType}</td>
                <td className="px-4 py-3 text-center">
                  {row.stored
                    ? <span className="text-btc-orange" aria-label="Yes">✓</span>
                    : <span className="text-emerald-400" aria-label="No">✗</span>
                  }
                </td>
                <td className="px-4 py-3 text-center">
                  {row.transmitted
                    ? <span className="text-zinc-400" aria-label="Yes, see notes">→</span>
                    : <span className="text-emerald-400" aria-label="No">✗</span>
                  }
                </td>
                <td className="px-4 py-3 font-sans text-xs text-zinc-500 hidden md:table-cell">{row.purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="font-mono text-xs text-zinc-600 text-center mt-6">
        * Bitcoin addresses are public identifiers by design — transmitting them to query on-chain data is equivalent to querying a public ledger.
      </p>
    </SectionWrapper>
  );
}
