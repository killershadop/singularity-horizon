import SingularityHorizon from '@/components/ui/singularity-horizon'

export default function Page() {
  return (
    <main className="min-h-screen bg-[#010103] text-white">
      <SingularityHorizon
        height="100svh"
        interval={8500}
        particles={6000}
        wallet="0x7F...A91C"
        chain="ETHEREUM"
        proximity="0.87"
        support="0.92"
        candidate="BINANCE"
        attribution="CANDIDATE"
        riskState="VASP MATCHING: ACTIVE"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 hidden items-start justify-between p-6 sm:flex font-mono text-[0.55rem] uppercase tracking-[0.28em] text-white/55 sm:p-10 sm:text-[0.65rem]">
        <div>
          <div className="text-lg font-semibold tracking-[0.18em] text-white/90 sm:text-2xl">VASPTrace</div>
          <div className="mt-2 max-w-[18rem] leading-relaxed">Automated attribution of unknown crypto wallets to nearest VASPs</div>
        </div>
        <div className="hidden text-right sm:block">
          <div>SMART INDIA HACKATHON — CONCEPT DEMO</div>
          <div className="mt-2 text-cyan-300/70">6 CHAINS SUPPORTED</div>
          <div className="mt-1 max-w-[25rem] leading-relaxed">ETHEREUM · BITCOIN · TRON · BSC · POLYGON · SOLANA</div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-5 z-30 hidden justify-center px-6 text-center sm:flex font-mono text-[0.5rem] uppercase tracking-[0.24em] text-white/45 sm:bottom-8 sm:text-[0.6rem]">
        <span>TRANSACTION GRAPH: ACTIVE&nbsp; · &nbsp;ADDRESS CLUSTER: ANALYZING&nbsp; · &nbsp;EVIDENCE: COLLECTED&nbsp; · &nbsp;SIMULATED VALUES</span>
      </div>
    </main>
  )
}
