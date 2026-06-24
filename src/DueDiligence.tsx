import {
  BarChart,
  Callout,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Grid,
  H1,
  H2,
  H3,
  Link,
  PieChart,
  Pill,
  Row,
  Stack,
  Stat,
  Table,
  Text,
} from "cursor/canvas";

export default function DueDiligence() {
  return (
    <Stack gap={24}>
      <Stack gap={6}>
        <H1>242 45th St, Brooklyn — Inspection Due Diligence</H1>
        <Text tone="secondary">
          Sunset Park, Community Board 7 · Block 745, Lot 26 · BIN 3011473 · DOF
          tax class 1 (small home, fewer than 4 families) · Sources: NYC DOB
          BIS, inspection report (5/20/2026), proposed contract of sale +
          riders (K – Proposed, May 2026), DG deal sheet (5/19/2026), 2014
          deed (Marinovich acquisition), DOF Q3 2026 RE tax bill,
          Collinson closing-costs worksheet, Randy Chang engagement letter.
        </Text>
      </Stack>

      <Grid columns={5} gap={12}>
        <Stat value="$1.25M" label="Contract price (proposed)" tone="success" />
        <Stat value="$125k" label="Downpayment (10%) in escrow" />
        <Stat value="$1.0M" label="Target mortgage (80% LTV per worksheet)" />
        <Stat value="~$130k" label="Additional cash to close (est.)" tone="warning" />
        <Stat value="45 / 60 days" label="Mortgage commitment / closing" tone="info" />
      </Grid>

      <Grid columns={5} gap={12}>
        <Stat value="0" label="Certificates of Occupancy on file" tone="warning" />
        <Stat value="1" label="Open A2 permit never signed off" tone="warning" />
        <Stat value="2 of 3" label="Mini-splits failed at inspection" tone="danger" />
        <Stat value="14–16 yr" label="Roof age (design life 18–20)" tone="warning" />
        <Stat value="3 × 100A" label="Electrical service (per-floor sub-panels)" tone="success" />
      </Grid>

      <Callout
        tone="danger"
        title="Top five things to resolve before you sign or waive contingencies"
      >
        <Stack gap={6}>
          <Text>
            <Text weight="semibold">
              1. Two of three mini-split heat pumps failed at inspection
              (5/20/2026).
            </Text>{" "}
            Inspector confirmed the upper-level Fujitsu unit works, but the
            main-level and basement units would not start when tested.
            Equipment is 12–13 yrs old (design life 18–20). This is the
            single biggest cash item from the inspection and must be a seller
            credit, contract repair, or price reduction. Budget $12–25k to
            replace two systems with modern high-efficiency mini-splits.
          </Text>
          <Text>
            <Text weight="semibold">2. No Certificate of Occupancy on file.</Text>{" "}
            For a pre-1938 building this is common, but you must obtain a Letter
            of No Objection (LNO) from DOB confirming legal use as a 2-family
            dwelling. Without it, the seller cannot prove the legal occupancy
            you're paying for, and your lender or title insurer may refuse to
            close.
          </Text>
          <Text>
            <Text weight="semibold">
              3. Job #301532535 (A2, 2003) is &quot;PERMIT-PARTIAL&quot; — never
              signed off.
            </Text>{" "}
            A permit was pulled to renovate the 2-family but the job was never
            closed out with DOB. A later post-approval amendment was approved in
            Feb 2004; an interim filing was withdrawn. Demand the seller produce
            a sign-off (or pay to close it) before closing — open permits
            transfer to you and can block future work, refinancing, or sale.
          </Text>
          <Text>
            <Text weight="semibold">
              4. Two prior &quot;work without permit&quot; violations.
            </Text>{" "}
            Both ECB and DOB violations from 2001 and 2003 were ultimately
            dismissed, but the pattern suggests historic unpermitted work.
            The inspector also noted the basement is fully finished with
            recessed lighting, mini-split, partitions, and LVP — confirm none
            of that was permitted, and back-file if needed.
          </Text>
          <Text>
            <Text weight="semibold">
              5. Contract Rider R-28 lets the seller cancel if CO / permit
              sign-offs aren&apos;t issued.
            </Text>{" "}
            The proposed contract gives Matt Marinovich an out — return your
            deposit — if required certificates of occupancy or permit sign-offs
            for alterations are not on file at closing. With an open 2003 A2
            permit and no C of O, this is a seller escape hatch, not buyer
            protection. Negotiate a pre-closing obligation to close Job
            301532535 and deliver a 2-family CO or LNO before you bind, or
            amend R-28 so the seller must cure, not cancel.
          </Text>
        </Stack>
      </Callout>

      <H2>Building record snapshot</H2>
      <Grid columns={2} gap={16}>
        <Card>
          <CardHeader>Permit / job history (BIS)</CardHeader>
          <CardBody style={{ padding: 0 }}>
            <Table
              framed={false}
              headers={["Filed", "Job #", "Type", "Status", "Scope"]}
              columnAlign={["left", "left", "left", "left", "left"]}
              rows={[
                [
                  "12/26/2003",
                  "301532535 / 03",
                  "A2 PAA",
                  "P APPROVED 02/23/2004",
                  "Post-approval amendment to 01",
                ],
                [
                  "11/14/2003",
                  "301532535 / 02",
                  "A2",
                  "Withdrawn 02/19/2004",
                  "CEL, 1st, 2nd floors",
                ],
                [
                  "04/08/2003",
                  "301532535 / 01",
                  "A2",
                  "PERMIT-PARTIAL (open)",
                  "Renovate 2-family, no egress/occupancy change",
                ],
                [
                  "01/16/1976",
                  "PRS 31/1976",
                  "Plumbing repair slip",
                  "Pre-BIS",
                  "Plumbing work — details not in BIS",
                ],
              ]}
              rowTone={[undefined, undefined, "warning", undefined]}
            />
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Violations (BIS / OATH-ECB)</CardHeader>
          <CardBody style={{ padding: 0 }}>
            <Table
              framed={false}
              headers={["Date", "Number", "Type", "Disposition"]}
              rows={[
                [
                  "03/21/2003",
                  "ECB 34387260R",
                  "Construction (B04)",
                  "Dismissed",
                ],
                [
                  "01/24/2001",
                  "ECB 34273795H",
                  "Construction (B04)",
                  "Dismissed",
                ],
                [
                  "01/24/2001",
                  "VW* 012401C07EM02",
                  "DOB — work w/o permit",
                  "Dismissed",
                ],
                [
                  "03/21/2003",
                  "VEC* 032103C07RG03",
                  "ECB — construction",
                  "Dismissed",
                ],
              ]}
            />
          </CardBody>
        </Card>
      </Grid>

      <Row gap={8} wrap>
        <Pill tone="info">Landmark: No</Pill>
        <Pill tone="info">Loft Law: No</Pill>
        <Pill tone="info">SRO Restricted: No</Pill>
        <Pill tone="info">HPD Multiple Dwelling: No</Pill>
        <Pill tone="info">Flood / wetlands: Not in mapped area (verify)</Pill>
        <Pill tone="warning">Additional designation: IBZ</Pill>
      </Row>

      <Divider />

      <H2>Inspection priorities, ranked</H2>
      <Text tone="secondary">
        Walk this list with your inspector. Items in the top tier are
        site-specific findings from the BIS record; the rest are NYC row-house
        standards weighted for a building of this age and neighborhood.
      </Text>

      <H3>Tier 1 — Site-specific red flags (must resolve)</H3>
      <Table
        headers={["#", "Item", "Why it matters", "What to ask / verify"]}
        columnAlign={["right", "left", "left", "left"]}
        rowTone={["danger", "danger", "danger", "warning", "warning"]}
        rows={[
          [
            "1",
            "Open 2003 A2 permit (Job 301532535)",
            "Open permits transfer with the deed; lender/title may flag at closing; blocks future filings.",
            "Get the full PW1/PW3, final inspection report, and DOB sign-off. If unsigned, make seller close it or escrow funds.",
          ],
          [
            "2",
            "No C of O on file",
            "Legal 2-family use isn't proven on paper.",
            "Have seller obtain a Letter of No Objection from DOB confirming 2-family use, or order one yourself before closing.",
          ],
          [
            "3",
            "Two historic work-without-permit violations",
            "Suggests prior unpermitted alterations even though violations dismissed.",
            "Compare current floor plan vs 2003 permitted scope. Look for added bathrooms, kitchens, basement units, partitioned rooms, removed bearing walls.",
          ],
          [
            "4",
            "Cellar legal status",
            "2003 work covered CEL, 1st, 2nd — but cellars in NYC cannot be legal living space unless specifically approved.",
            "Confirm cellar is not being represented or used as a separate dwelling unit; check ceiling height, egress, light/air.",
          ],
          [
            "5",
            "IBZ (Industrial Business Zone) designation",
            "Lot sits in an IBZ — residential use is grandfathered, but adjacent parcels can be industrial/auto/warehouse, affecting noise, air, resale.",
            "Walk the block at different hours. Check neighbors' uses on ZoLa. Confirm your insurer/lender are fine with the designation.",
          ],
        ]}
      />

      <H3>Tier 2 — Structural &amp; building envelope</H3>
      <Table
        headers={["Item", "What the inspector should check"]}
        rows={[
          [
            "Foundation & cellar",
            "Cracks, settlement, efflorescence, prior waterproofing, sump pump, evidence of past flooding. Sunset Park has a mix of fill and clay soils; cellars commonly leak.",
          ],
          [
            "Party walls",
            "Brooklyn row-house: shared walls with #240 and #244. Look for cracks, separation, prior repair, daylight, smell of smoke (suggests fire-stopping gaps).",
          ],
          [
            "Roof",
            "Age and type (likely flat/tar built-up or modified bitumen), drainage, parapet condition, flashing at chimney and party walls, internal staining on top floor ceilings.",
          ],
          [
            "Facade",
            "Local Law 11 only applies to 6+ stories, but inspect brick, lintels, sills, mortar joints, cornice anchors. Brownstone/brick row-houses commonly need spot repointing.",
          ],
          [
            "Windows / lintels",
            "Original wood vs replacement, condition of steel lintels above windows, weights/sash cords if original.",
          ],
          [
            "Sidewalk & areaway",
            "DOT issues sidewalk violations to the owner. Check curb cuts, tree-pit damage, vault under sidewalk (common in Brooklyn — owner's responsibility).",
          ],
        ]}
      />

      <H3>Tier 3 — Mechanical, electrical, plumbing</H3>
      <Table
        headers={["System", "Specific concerns for this building"]}
        rows={[
          [
            "Heating / boiler",
            "Gas-fired Weil McLain circulating boiler (MFG 02/2013) — confirm annual service, combustion air, and venting. Focus on heat-exchanger condition and circulator maintenance.",
          ],
          [
            "Hot water",
            "Type, age, venting (back-drafting near boiler is common in tight basements).",
          ],
          [
            "Electrical service",
            "Amp rating (60A or 100A is common in untouched pre-war 2-family; modern usage needs 150–200A). Check for knob-and-tube, cloth wiring, double-tapped breakers, mixed copper/aluminum, ungrounded outlets, sub-panel for 2nd unit.",
          ],
          [
            "Water supply",
            "Lead service line: NYC DEP has a public map — check before closing. Internal piping: look for galvanized steel (low pressure, rusting), partial copper repipes.",
          ],
          [
            "Sewer / waste",
            "Cast-iron stack age, signs of patching, basement floor drain backflow history. Strongly consider an independent sewer-camera scope to the city main — collapsed laterals are $$$ to replace and not always visible.",
          ],
          [
            "Gas",
            "Visible corrosion, illegal flex connectors, prior LL152 inspection (required for buildings with gas piping). Ask for the latest GPS1/GPS2 report.",
          ],
          [
            "Ventilation",
            "Bath/kitchen exhaust terminations, dryer venting (common fire hazard when terminated into wall cavity).",
          ],
        ]}
      />

      <H3>Tier 4 — Health, environmental, pests</H3>
      <Table
        headers={["Item", "Why and how"]}
        rows={[
          [
            "Lead paint",
            "Pre-1960 NYC building — assume present. Required disclosure from seller; consider XRF testing especially on windows, doors, and exterior trim.",
          ],
          [
            "Asbestos",
            "Common in pipe insulation, floor tiles (9x9), boiler/duct wrap, plaster, popcorn ceilings. Ask for any ACP-5/ACP-7 filings related to the 2003 work; have inspector flag suspect materials.",
          ],
          [
            "Mold / moisture",
            "Cellar, behind kitchen/bath walls, top-floor ceilings, basement-to-1st-floor stair stringers.",
          ],
          [
            "Radon",
            "Brooklyn is generally low risk but not zero — a short-term test is cheap and worth running in the cellar.",
          ],
          [
            "Pests",
            "Termites (less common in NYC but present), carpenter ants, rodent burrows along areaway and rear yard, roach evidence in cabinetry.",
          ],
          [
            "Site environmental (DEC)",
            "Sunset Park has industrial history nearby — review NYS DEC Environmental Site Remediation map for E-designations or spills on the block.",
          ],
        ]}
      />

      <H3>Tier 5 — Life safety &amp; legal use</H3>
      <Table
        headers={["Item", "What to confirm"]}
        rows={[
          [
            "Egress",
            "Two means of egress from each dwelling unit per NYC code. Check rear yard access, window sizes in bedrooms (legal egress windows), no bedrooms in cellar.",
          ],
          [
            "Smoke & CO alarms",
            "Hard-wired interconnected alarms expected on each story including cellar; CO alarm within 15 ft of every sleeping area.",
          ],
          [
            "Stair / handrails",
            "Common stair width, headroom, handrail continuity, riser consistency.",
          ],
          [
            "Number of units",
            "Walk every floor and the cellar yourself. Count kitchens, bathrooms, separate entrances, mailboxes, electric meters, gas meters. A 3rd kitchen or separate cellar entrance with a kitchen = illegal 3rd unit risk.",
          ],
          [
            "Fire-rated separations",
            "Between units and at boiler room — look for sheetrock vs original lath/plaster, self-closing door at unit entries.",
          ],
        ]}
      />

      <Divider />

      <H2>Inspection findings — 5/20/2026 (Massive Inspection Services)</H2>
      <Text tone="secondary">
        Walked by William Basch (NYS Lic. #16000013178). Report ID 052026WB2.
        Below: the items that moved the underwriting needle. Many earlier
        assumptions about the mechanicals were wrong — some better, some
        materially worse.
      </Text>

      <Grid columns={4} gap={12}>
        <Stat value="2013" label="Boiler MFG date (Weil McLain gas, ~13 yr)" tone="info" />
        <Stat value="2019" label="Indirect HW tank MFG (50 gal Burnham, ~7 yr)" tone="success" />
        <Stat value="None" label="Roof / top-floor ceiling insulation" tone="warning" />
        <Stat value="Brick" label="Foundation walls (wood joists/beams)" />
      </Grid>

      <Callout
        tone="danger"
        title="Material change: HVAC is the biggest new cash item — negotiate it"
      >
        <Text>
          The prior plan assumed the mini-splits were a non-issue (&quot;remove
          from major budget, ~$3–5k touch-ups&quot;). The inspector found{" "}
          <Text weight="semibold">two of three</Text> heat-pump zones
          (main-level + basement) <Text weight="semibold">failed to start</Text>{" "}
          when tested. Units are 12–13 yrs old, well into the back half of
          their 18–20 yr design life. Combined with the &quot;Repair or
          Replace&quot; rating, a competent HVAC service call will likely
          recommend{" "}
          <Text weight="semibold">replacement, not repair</Text>, for both
          failed zones. Treat as a $12–25k credit ask from the seller; do
          not absorb this on your side.
        </Text>
      </Callout>

      <H3>Inspector "Repair or Replace" items (negotiate as seller credits)</H3>
      <Table
        headers={["#", "Item", "Finding", "Est. cost", "Negotiation posture"]}
        columnAlign={["right", "left", "left", "right", "left"]}
        rowTone={[
          "danger",
          "warning",
          "warning",
          "warning",
          "warning",
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
        ]}
        rows={[
          [
            "1",
            "Cooling — main-level + basement mini-splits failed",
            "Two of three Fujitsu split-system heat pumps would not start when tested. 12–13 yrs old.",
            "$12–25k",
            "Seller credit at full replacement value (modern high-SEER mini-splits + line sets). This is the biggest line item from the inspection.",
          ],
          [
            "2",
            "Upper-floor sub-panel cover not seating properly",
            "Recessed breakers, panel cover no longer safely seals wiring. Active electrical hazard.",
            "$0.5–1.5k",
            "Insist on pre-closing repair by licensed electrician with paperwork. Safety item, not a credit item.",
          ],
          [
            "3",
            "Main-level sub-panel open slot + no circuit labeling",
            "One open slot exposes live bus; circuits unlabeled at both sub-panels.",
            "$0.3–0.8k",
            "Combine with #2 — licensed electrician trace + label all 3 panels + close slot.",
          ],
          [
            "4",
            "Front-entry handrails loose",
            "Handrails at front stoop loose, need reinforcement. Safety / trip-and-fall liability.",
            "$0.3–0.8k",
            "Punch list before closing or $500 credit. Critical if renting upper unit.",
          ],
          [
            "5",
            "Front walkway settled / cracked / uneven step",
            "Trip hazard at main entry. Will worsen with freeze–thaw cycles.",
            "$1.5–4k",
            "Seller fix or credit. Cosmetically obvious from the curb — also a listing-photo issue at resale.",
          ],
          [
            "6",
            "Bilco basement door has daylight gaps",
            "Water intrusion risk into the finished basement (your future rental income).",
            "$0.4–1k",
            "Punch list. New gasket + threshold seal.",
          ],
          [
            "7",
            "Basement stair risers uneven / steep",
            "Trip hazard on the staircase to the finished cellar. Code & safety issue for tenant access.",
            "$2–5k",
            "Carpenter to re-cut risers / treads. If you're renting the upstairs separately, this is mostly aesthetic; if cellar is part of owner unit, it's still a liability fix.",
          ],
          [
            "8",
            "Upper-bath light fixture not working",
            "Possibly burned bulb or failed fixture. GFCI receptacle tested OK.",
            "$0.1–0.4k",
            "Seller punch list. Trivial.",
          ],
          [
            "9",
            "Main-bath exhaust fan loud + missing cover",
            "Motor likely failing; cover absent.",
            "$0.2–0.5k",
            "Replace fan ($150 unit) + grille. Punch list.",
          ],
          [
            "10",
            "Kitchen cooktop front-right burner igniter failed",
            "Single burner igniter not lighting.",
            "$0.1–0.4k",
            "Seller punch list. Trivial.",
          ],
        ]}
      />

      <H3>Inspector "Fair condition" items (plan, don't panic)</H3>
      <Table
        headers={["Item", "Finding", "Implication"]}
        rows={[
          [
            "Roof — rubberized / rolled membrane",
            "14–16 yrs old, design life 18–20 yrs. Recently silver-coated as stopgap. No active leaks at inspection.",
            "Plan for full replacement in 2–4 yrs. Budget $25–45k for new modified-bitumen flat roof on this footprint. Combine with adding roof insulation since none currently exists.",
          ],
          [
            "Gas boiler — Weil McLain (MFG 02/2013)",
            "Functional and in fair condition. 12–13 yrs old, design life 18–20 yrs.",
            "Don't replace prematurely — significantly newer than the prior assumption of '20+ yrs.' Service contract (~$300–500/yr) and run another 5–7 yrs. Removes ~$5–10k of the prior budget.",
          ],
          [
            "Indirect HW tank — Burnham 50 gal (MFG 05/2019)",
            "~6–7 yrs old, design life 18–20 yrs. Functional.",
            "Excellent. Removes the prior 'heat-pump water heater retire-boiler' play. The tank is fed by the boiler — if you ever retire the boiler, you'd lose the existing HW source and need to repipe.",
          ],
          [
            "Roof / top-floor ceiling insulation",
            "Inspector explicitly notes no insulation found between upper-level ceiling and roof.",
            "Add R-49 batts or blown-in cellulose when the roof is replaced — typical $3–6k incremental and qualifies for utility rebates.",
          ],
          [
            "Top-floor rear bedroom window — failed vacuum seal",
            "Right window in upper-level rear bedroom shows moisture / cloudiness between panes. Insulation value mostly retained.",
            "Defer. Replace IGU only ($300–800) at next bedroom paint cycle.",
          ],
          [
            "Mixed-material plumbing waste lines",
            "Water supply is copper (good). Some distribution piping has been upgraded, but main waste / drain lines exiting to the city are original. Subject to ongoing corrosion.",
            "Add a sewer-camera scope before closing — $400–800 alone, and budget $5–15k for a spot repair if the camera shows defects. Original cast-iron stacks may need full re-line in 5–10 yrs.",
          ],
          [
            "Sump pump in basement floor (sealed pit)",
            "Pump present but could not be tested — sealed cover, low water in pit.",
            "Functional verification before closing. Add a battery backup or generator-fed circuit if you ever finish the basement as legal space.",
          ],
          [
            "Foundation walls — brick, with finished walls covering most of basement",
            "Inspector could not assess most of the foundation due to the finished basement (LVP floor, drywall, storage). Reported satisfactory where visible.",
            "Accept the limitation but make the back-filing of the cellar finish work (callout #4 above) a condition. Any latent water-penetration history would surface in the seller's disclosure or in the neighbor's history.",
          ],
        ]}
      />

      <H3>Inspector confirmations (good news — moves the budget down)</H3>
      <Table
        headers={["System", "Confirmed condition", "Why it matters for ROI"]}
        rowTone={["success", "success", "success", "success"]}
        rows={[
          [
            "Electrical service",
            "3 × 100A main panel + two 60A sub-panels (one per floor). Copper branch wiring. GFCIs at baths + kitchen counters.",
            "300A total service is ample for a fully separated 2-family. Per-floor sub-panels mean the building is already physically configured for unit-by-unit metering — separating the panels for sub-metering Con Ed is mostly a paperwork + meter-pan job, not a full re-wire. Drops the 2-family separation budget by $5–10k vs the prior assumption.",
          ],
          [
            "Roof drainage, flashings, skylights",
            "All rated satisfactory. Three fixed skylights, brick chimney + metal flue. No active leaks.",
            "Skylights in the upstairs family room are intact and watertight — protect during any unit-2 kitchen build-out.",
          ],
          [
            "Heating distribution — gas boiler with hydronic radiators + baseboard",
            "Functional at inspection, fair condition for age, MFG 02/2013.",
            "Confirms the building has a centralized heat source you can keep for ~5–7 more years. Don't include premature boiler replacement in Phase 1.",
          ],
          [
            "Detectors, GFCIs, water flow, fixture drainage, exterior siding (brick)",
            "All rated satisfactory.",
            "No hidden punch list under these headings. Brick exterior + intact cornice on front facade confirm earlier photo analysis.",
          ],
        ]}
      />

      <Callout tone="info" title="What the inspection did NOT cover (still on your list)">
        <Stack gap={4}>
          <Text>
            · No code-compliance review (legal use, egress, fire-rated
            separations, illegal unit check, cellar habitability).
          </Text>
          <Text>
            · No environmental: lead paint, asbestos, mold testing, radon —
            all explicitly excluded.
          </Text>
          <Text>
            · Sewer lateral was not scoped — strongly add a separate
            sewer-camera before closing ($400–800).
          </Text>
          <Text>
            · Heat exchanger condition inside boiler not assessed (visual only).
          </Text>
          <Text>
            · Most of the foundation, slab, beams, and party walls were behind
            finishes — the 2003 unpermitted-work risk is not addressed by this
            report and remains a paperwork / DOB issue.
          </Text>
        </Stack>
      </Callout>

      <Divider />

      <H2>Proposed contract of sale — May 2026</H2>
      <Text tone="secondary">
        NYSBA Residential Contract of Sale + Rider + Second Rider, as proposed
        between seller Matt P. Marinovich and purchasers Josef &amp; Samantha
        Collinson. Purchaser&apos;s counsel: Law Office of Randy Chang, PLLC.
        Seller&apos;s counsel / escrow: Michael J. Ficchi, Esq. (Chase Bank,
        444 5th Ave, Brooklyn).
      </Text>

      <Grid columns={4} gap={12}>
        <Stat value="$1.25M" label="Purchase price" tone="success" />
        <Stat value="$25k" label="Below list ($1.275M)" tone="success" />
        <Stat value="$1.125M" label="Balance at closing" />
        <Stat value="$500" label="PCDS waiver credit at closing" tone="info" />
      </Grid>

      <Callout
        tone="warning"
        title="Contract is heavily seller-protective — inspection findings must be negotiated before signing"
      >
        <Stack gap={6}>
          <Text>
            <Text weight="semibold">No home-inspection contingency.</Text>{" "}
            The contract is &quot;as is&quot; (§12, Rider R-19, R-37). You
            waived the Property Condition Disclosure Act and lead-paint inspection
            opportunity. The only $500 credit at closing reimburses inspection
            cost — it is not a repair credit. Termite inspection must be
            completed and notice served within 10 days of contract date (R-22).
          </Text>
          <Text>
            <Text weight="semibold">§10(a) governmental violations — deleted.</Text>{" "}
            Seller is not contractually required to clear DOB, HPD, or ECB
            violations before closing. Rider R-14 caps seller violation
            remediation at $500; above that, seller can refuse and you take title
            as-is or cancel.
          </Text>
          <Text>
            <Text weight="semibold">R-28 CO / permit escape hatch.</Text>{" "}
            If required CO or permit sign-offs are missing, seller may cancel
            and return deposit — critical given open Job 301532535 and no C of
            O on file.
          </Text>
          <Text>
            <Text weight="semibold">Partial buyer protection in R-21.</Text>{" "}
            Despite §16(e) being struck out, Rider R-21 requires plumbing,
            heating, electrical systems, and a leak-free roof at closing. Two
            failed mini-splits and sub-panel hazards are leverage under R-21
            — insist on repair or closing credit before deed acceptance (R-29
            discharges seller once you accept the deed).
          </Text>
          <Text>
            <Text weight="semibold">Second Rider — removed upstairs kitchen.</Text>{" "}
            Seller discloses the top-floor kitchen was removed when the room
            was converted to a master bedroom; plumbing remains concealed
            behind sheetrock. Contract gives you deposit refund if lender denies
            commitment solely because of the removed kitchen — relevant to your
            2-family restoration plan and appraisal.
          </Text>
        </Stack>
      </Callout>

      <H3>Contract terms snapshot</H3>
      <Table
        headers={["Term", "Contract language", "Due-diligence implication"]}
        rows={[
          [
            "Parties",
            "Seller: Matt P. Marinovich · Purchasers: Josef & Samantha Collinson",
            "Contract matches inspection report addressee (Collinson).",
          ],
          [
            "Price / deposit",
            "$1,250,000 · $125,000 down (10%) in escrow · $1,125,000 at closing",
            "$25k below Redfin list. 10% deposit at risk if you default.",
          ],
          [
            "Financing",
            "Contract §8: $900,000 mortgage / 45-day commitment / 30-yr min · Closing-costs worksheet & DG deal sheet: $1,000,000 (80% LTV) target",
            "Reconcile before signing: contract floor is $900k, worksheet plans $1M. Lender must be comfortable with 2-family, IBZ, no C of O, open permit, removed kitchen.",
          ],
          [
            "Closing",
            "On or about 60 days from fully executed contract · 10 AM · Ficchi office, 706 5th Ave, Brooklyn",
            "~late July 2026 if signed late May. Attorneys may extend dates (R-30).",
          ],
          [
            "Possession",
            "Vacant, broom-clean, entire premises within 7 days of closing · $1,000 escrow · $75/day holdover penalty",
            "Not same-day vacant — plan 7-day post-closing buffer before tenant work.",
          ],
          [
            "Property type",
            "R-5 + Second Rider: legal two-family dwelling",
            "Aligns with DOF B9 class and your ROI thesis — but CO/permit gap remains.",
          ],
          [
            "Seller reps",
            "Not in mortgage default · no foreclosure · taxes current through next lien date (R-34)",
            "Positive — reduces title/financial distress risk.",
          ],
          [
            "PCDS / disclosures",
            "R-37: Article 14 waived · caveat emptor · $500 credit at closing",
            "No seller disclosure of condition. All discovery is on you.",
          ],
          [
            "Working systems",
            "§16(e) struck out · R-21 restores plumbing/heat/electric + leak-free roof at closing",
            "Primary contractual hook for HVAC credit/repair before closing.",
          ],
          [
            "Violations / permits",
            "§10(a) deleted · R-14 cap $500 · R-28 seller cancel if no CO/sign-offs · R-10 AC/antenna violations pass through",
            "Worst clauses for this specific building. Must amend or cure pre-sign.",
          ],
          [
            "Lead paint",
            "Seller: no knowledge · Purchaser waived 10-day inspection opportunity",
            "Pre-1960 building — assume lead present; you gave up statutory inspection window.",
          ],
          [
            "Brokers",
            "Daniel Gale-Sotheby's + Redfin · seller pays commission (§27)",
            "Standard.",
          ],
        ]}
      />

      <Divider />

      <H2>Closing-cost estimate — cash to close</H2>
      <Text tone="secondary">
        Source: Collinson closing-costs worksheet + standard NYC charges
        (mortgage tax, mansion tax, title insurance). All numbers are
        estimates and exclude adjustments and Day-1 reserves.
      </Text>

      <Grid columns={4} gap={12}>
        <Stat value="$1.25M" label="Purchase price" />
        <Stat value="~$995k" label="Net loan proceeds (after bank fees)" tone="info" />
        <Stat value="~$130k" label="Additional cash beyond deposit" tone="warning" />
        <Stat value="$255k" label="Approx total cash out-of-pocket" tone="warning" />
      </Grid>

      <H3>Estimated buyer closing costs</H3>
      <Table
        headers={["Item", "Amount", "Notes"]}
        columnAlign={["left", "right", "left"]}
        rows={[
          [
            "Mortgage recording tax (NY 1.925% on $1M)",
            "$19,220",
            "NYC residential mortgage tax (~1.925% over $500k); buyer pays.",
          ],
          [
            "Mansion tax (1% of price $1M+)",
            "$12,500",
            "Triggered because purchase price ≥ $1M residential. No escape.",
          ],
          [
            "Title — owner's policy premium",
            "$5,151",
            "Insures your title against unknown claims; required for cash buyers, recommended always.",
          ],
          [
            "Title — loan policy premium",
            "$1,073",
            "Required by lender on the $1M loan.",
          ],
          [
            "Title search / production",
            "~$750",
            "Includes municipal search; needed to surface judgments and liens.",
          ],
          [
            "Recording / filing fees",
            "~$750",
            "Deed + mortgage recording at ACRIS.",
          ],
          [
            "Survey",
            "~$900",
            "Required by lender; confirms boundaries and party-wall encroachments (relevant given Rider R-38 out-of-possession clause).",
          ],
          [
            "Title closer",
            "$250",
            "Attendance fee at closing.",
          ],
          [
            "Bank fees (origination, appraisal, escrow, etc.)",
            "~$5,000",
            "Per worksheet — confirm with lender's Loan Estimate.",
          ],
          [
            "Buyer attorney (Randy Chang)",
            "$3,000",
            "Flat fee per engagement letter; covers contract, due diligence, title, loan, closing. Excludes tax/FIRPTA/litigation.",
          ],
          [
            "Homeowners insurance (Year 1)",
            "$2,500–4,500",
            "Worksheet line blank. Bind a policy with replacement-cost on the row-house + landlord rider once unit 2 is restored.",
          ],
          [
            "PCDS waiver credit (from seller)",
            "−$500",
            "Per Rider R-37 — partially offsets your inspection cost.",
          ],
        ]}
      />

      <Callout
        tone="warning"
        title="$1.25M crosses the mansion-tax line — a $1,000,000 contract would save $12,500"
      >
        <Text>
          The $12,500 mansion tax kicks in at exactly $1,000,000.01. Every
          dollar between $1M and $1.25M costs you 1% (i.e., you don&apos;t
          avoid the tax by getting close — you have to break $1M). If a
          re-trade or seller credit gets the price to or below $1,000,000, the
          mansion tax goes to zero. Above $1M, that&apos;s a known $12,500
          cost — factor it into any post-inspection price negotiation.
        </Text>
      </Callout>

      <H3>Estimated cash to close (illustrative)</H3>
      <Grid columns={2} gap={16}>
        <Card>
          <CardHeader>Sources</CardHeader>
          <CardBody style={{ padding: 0 }}>
            <Table
              framed={false}
              headers={["Source", "Amount"]}
              columnAlign={["left", "right"]}
              rows={[
                ["Deposit (already in escrow)", "$125,000"],
                ["Net loan proceeds (after $5k bank fees)", "$995,000"],
                ["Additional buyer cash at closing", "$130,000"],
                ["Total sources", "$1,250,000"],
              ]}
              rowTone={[undefined, undefined, undefined, "info"]}
            />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Uses</CardHeader>
          <CardBody style={{ padding: 0 }}>
            <Table
              framed={false}
              headers={["Use", "Amount"]}
              columnAlign={["left", "right"]}
              rows={[
                ["Pay seller (purchase price)", "$1,250,000"],
                ["Plus buyer closing costs (mortgage + mansion + title + survey + attorney + insurance)", "~$46–48k"],
                ["Approx total cash out-of-pocket (deposit + add'l cash + closing costs)", "~$255k"],
                ["Reserve for HVAC + safety repairs post-credits", "$5–15k"],
                ["Total uses (worst case)", "~$270k"],
              ]}
              rowTone={[undefined, undefined, "info", "warning", "danger"]}
            />
          </CardBody>
        </Card>
      </Grid>

      <Text tone="tertiary" size="small">
        Mansion tax ($12.5k) and mortgage recording tax ($19.2k) together are
        $31,700 — about 2.5% of the purchase price — and dwarf every other
        buyer-side closing line. Both are unavoidable at this contract price.
      </Text>

      <Divider />

      <H2>Seller acquisition history (deed)</H2>
      <Text tone="secondary">
        Source: NYC ACRIS deed CRFN 2014000322083, recorded 09/30/2014.
        Establishes seller&apos;s 2014 cost basis and the building&apos;s
        long-term price trajectory.
      </Text>

      <Grid columns={4} gap={12}>
        <Stat value="$695k" label="Marinovich 2014 purchase (back-solved from transfer tax)" tone="info" />
        <Stat value="$1.25M" label="2026 contract price" tone="success" />
        <Stat value="+80%" label="Total appreciation 2014–2026" tone="success" />
        <Stat value="~5.0% / yr" label="Compounded annual price growth" />
      </Grid>

      <H3>Title chain</H3>
      <Table
        headers={["Date", "Grantor", "Grantee", "Doc / CRFN", "Inferred price"]}
        rows={[
          [
            "01/09/2004 (recorded 03/04/2004)",
            "Juliet Gittens & Kwhame Gittens",
            "Xing Long Chen & Chang Qing Zheng (husband & wife)",
            "CRFN 2004000132507",
            "—",
          ],
          [
            "09/17/2014 (recorded 09/30/2014)",
            "Xing Long Chen & Chang Qing Zheng",
            "Matt P. Marinovich",
            "CRFN 2014000322083 · Doc 2014091701074001",
            "~$695,000 (NYC RPTT $9,903.75 + NYS RETT $2,780 imply $695k)",
          ],
          [
            "May 2026 (proposed)",
            "Matt P. Marinovich",
            "Josef & Samantha Collinson",
            "K – Proposed",
            "$1,250,000",
          ],
        ]}
      />

      <Callout
        tone="info"
        title="Seller has substantial untaxed gain — supports your case for credits"
      >
        <Text>
          Marinovich paid roughly $695k in 2014. At $1.25M he books a{" "}
          <Text weight="semibold">~$555k gross gain</Text> before commission
          (~$62,500 at 5%), NY/NYC transfer tax (~$16k), and his own attorney.
          Net of capital gains (long-term federal + NYS, with $250k single /
          $500k joint primary-residence exclusion if eligible), this is still
          a meaningful win. He can almost certainly absorb a $14–28k credit
          for inspection items without putting the deal at risk —{" "}
          <Text weight="semibold">use this when negotiating</Text>.
        </Text>
      </Callout>

      <Divider />

      <H2>Property tax detail (DOF)</H2>
      <Text tone="secondary">
        Source: NYC DOF Q3-26 quarterly statement (activity through 2/21/2026,
        due 4/1/2026).
      </Text>

      <Grid columns={4} gap={12}>
        <Stat value="$3,696.96" label="Annual property tax (FY26)" tone="success" />
        <Stat value="$912.97" label="Quarterly bill (due 4/1/26)" />
        <Stat value="$1,138,000" label="DOF estimated market value" />
        <Stat value="19.843%" label="Class 1 tax rate × billable assessed" tone="info" />
      </Grid>

      <Table
        headers={["Detail", "Value", "Implication"]}
        rows={[
          [
            "Tax class",
            "1 — small home, fewer than 4 families",
            "Class 1 assessment caps (6% / yr, 20% / 5 yr) protect against rapid tax growth even after market appreciation.",
          ],
          [
            "DOF market value",
            "$1,138,000",
            "$112k below the $1.25M contract price — DOF will not chase your purchase price; assessment grows on caps, not on sale.",
          ],
          [
            "Billable assessed value",
            "$18,631",
            "Effective rate ~0.30% of contract price — among the lowest in NYC class 1 stock; durable cash-flow advantage for a 2-family.",
          ],
          [
            "Adopted tax rate adjustment",
            "−$22.54 (1/1/26 reconciliation)",
            "Routine FY26 rate true-up; current rate is 19.843%.",
          ],
          [
            "Outstanding charges",
            "$0.00",
            "Seller is current — aligns with Rider R-34 representation. Confirm at closing.",
          ],
          [
            "STAR / SCHE / DHE",
            "Not visible on bill",
            "Marinovich appears to not claim STAR; verify before assuming you can re-enroll as primary residence.",
          ],
        ]}
      />

      <Divider />

      <H2>Deal sheet vs contract — clean-up items</H2>
      <Text tone="secondary">
        Source: Daniel Gale-Sotheby&apos;s deal sheet dated 5/19/2026 vs the
        proposed K – Proposed contract.
      </Text>
      <Table
        headers={["Field", "Deal sheet", "Contract / worksheet", "Action"]}
        rows={[
          [
            "Price",
            "$1,250,000",
            "$1,250,000",
            "Match.",
          ],
          [
            "Deposit",
            "10% ($125,000)",
            "$125,000 (§3)",
            "Match.",
          ],
          [
            "Financing",
            "80% mortgage",
            "$900,000 minimum (§8); worksheet plans $1,000,000",
            "Have Randy Chang amend §8 to $1,000,000 commitment so the contingency matches your actual loan, or formally accept the $900k floor.",
          ],
          [
            "Mortgage contingency",
            "45 days (listed under \"Contingency\")",
            "§8: 45 days from fully-executed contract",
            "Match.",
          ],
          [
            "Estimated closing",
            "45 days (deal sheet)",
            "60 days (§15)",
            "Contract controls. Plan around §15 60-day clock.",
          ],
          [
            "RE Taxes",
            "$3,697",
            "$3,696.96 (DOF FY26)",
            "Match.",
          ],
          [
            "Brokers",
            "Daniel Gale 2.5% + Redfin 2.5% (seller pays)",
            "§27: seller pays both",
            "Match.",
          ],
          [
            "Buyer address listed",
            "242 45th St, Brooklyn, NY 11220",
            "Blank on contract page 1",
            "Cosmetic — fill in your current address before signing.",
          ],
          [
            "Inspection",
            "Scheduled 5/20/26 (already complete)",
            "No contingency in K (R-37 PCDS waiver)",
            "Your leverage is pre-signing only. Use inspection findings to negotiate now.",
          ],
        ]}
      />

      <Divider />

      <H2>Attorney engagement (Randy Chang, PLLC)</H2>
      <Text tone="secondary">
        Source: engagement letter (revised), Law Office of Randy Chang.
      </Text>
      <Table
        headers={["Term", "Detail", "Note"]}
        rows={[
          [
            "Attorneys assigned",
            "Randy Chang / Colin McGeough",
            "McGeough is your primary point of contact on this file.",
          ],
          [
            "Scope",
            "Contract negotiation/review, due diligence review, title review, loan documents, closing attendance",
            "Standard purchaser representation.",
          ],
          [
            "Excluded",
            "Tax / 1031 / FIRPTA / capital gains, bankruptcy, business mgmt, any non-legal matter, litigation",
            "You will need a separate CPA for the tax-credit + house-hack income side of the 2-family thesis.",
          ],
          [
            "Flat fee",
            "Per closing-costs worksheet: $3,000 (engagement letter blank)",
            "Confirm $3,000 in writing before signing the engagement.",
          ],
          [
            "Early termination",
            "1/3 of flat fee if you terminate before fully-executed contract",
            "About $1,000 if you walk pre-signing — cheap insurance to use the contract leverage now.",
          ],
          [
            "Additional fees (examples)",
            "Power of attorney +$250, amendment after full execution +$450, corporate resolution +$350, lease review +$750/lease",
            "If you bring on a tenant for unit 2 before closing or amend the K post-signing, budget for these.",
          ],
          [
            "Title authorization",
            "Firm orders lien/title search from a reputable NYS title insurer",
            "Pre-authorized — if you want a specific title company, tell them now.",
          ],
          [
            "Joint clients",
            "No expectation of confidentiality between you and Samantha — firm represents you jointly",
            "Standard for spouses; just be aware.",
          ],
        ]}
      />

      <Divider />

      <H3>Contract vs inspection — negotiation map</H3>
      <Table
        headers={["Inspection finding", "Contract leverage", "Recommended ask"]}
        rowTone={["danger", "warning", "warning", "warning", undefined, undefined]}
        rows={[
          [
            "2 of 3 mini-splits failed ($12–25k)",
            "R-21: heating/AC must work at closing",
            "Seller repair or $12–18k closing credit before deed (R-29 merger)",
          ],
          [
            "Sub-panel cover + open slot ($1–2k)",
            "R-21: electrical in working order",
            "Licensed electrician repair pre-closing — safety, not deferrable",
          ],
          [
            "Open 2003 A2 permit + no C of O",
            "§16(b) CO required · R-28 seller cancel if missing",
            "Amend R-28: seller must close permit + deliver LNO/CO, not cancel option",
          ],
          [
            "Front handrails, walkway, Bilco, stairs ($4–10k)",
            "§12 as-is · no inspection contingency",
            "Closing credit or pre-closing punch list — no automatic contract right",
          ],
          [
            "Roof 14–16 yrs, fair, no active leaks",
            "R-21: roof free of leaks at closing",
            "Acceptable today — document condition at final walk-through",
          ],
          [
            "Removed upstairs kitchen (Second Rider)",
            "Deposit refund if lender denies for kitchen removal only",
            "Confirm lender/appraiser OK with 2-family re-separation plan before commitment",
          ],
        ]}
      />

      <Divider />

      <H2>Listing snapshot (Redfin)</H2>
      <Grid columns={4} gap={12}>
        <Stat value="$1.275M" label="Original list price" />
        <Stat value="$1.25M" label="Proposed contract price" tone="success" />
        <Stat value="3 / 2" label="Bed / Bath" />
        <Stat value="$3,696" label="Annual taxes" tone="success" />
      </Grid>
      <Text tone="secondary">
        17.33 x 100.17 ft lot · 2 stories above grade (~1,500 sf) + finished
        basement (~575 sf) · legal 2-family being sold as a single · MLS
        RLS20079085 · brick row-house with intact original cornice and
        brownstone window trim · ~$570 / sf at contract price (inclusive of basement).
      </Text>

      <Divider />

      <H2>Residential renovation brief</H2>
      <Text tone="secondary">
        Owner design scope for a cohesive architectural overhaul — not
        incremental repair. Each line states what a space should{" "}
        <Text weight="semibold">become</Text>, so an architect can design
        toward the highest outcome. Priority tags reflect owner must-haves vs.
        nice-to-haves (Jun 2026).{" "}
        <Link href={`${import.meta.env.BASE_URL}renovation-brief.html`}>
          One-page PDF brief for architect / contractor
        </Link>{" "}
        — open and use Print → Save as PDF.
      </Text>

      <Callout tone="success" title="Must-haves (11 items — bid and permit around these first)">
        <Stack gap={4}>
          <Text>
            Top-floor kitchen · tankless water heater + add shower function to
            the existing top-floor tub · retile or regrout that bath · remove drywall near
            bed + rebuild closet (top-floor bedroom) · close banister opening
            with full-height wall + transom above door to top floor · second
            internet cable chase · remove wall between ground-floor living room
            and parlor · ground-floor kitchen pantry + booth refresh · basement moisture mitigation
            (test-first seal/coating) · exterior hose spigot + outlet out front.
          </Text>
          <Text tone="secondary">
            Everything else in this brief — including the full ground-floor
            kitchen overhaul, acoustic flooring, pocket doors, entry millwork,
            storage built into the wall under the stairs, and parlor-to-bedroom conversion — is
            nice-to-have and can phase after must-haves.
          </Text>
        </Stack>
      </Callout>

      <H3>Design intent (global)</H3>
      <Stack gap={4}>
        <Text>
          · Unify the renovation as one integrated project, not isolated
          trades.
        </Text>
        <Text>
          · Prioritize spatial flow: open living where desired, defined rooms
          where needed; pocket/barn/transom elements to control light, sound,
          and pantry/storage integration.
        </Text>
        <Text>
          · Modernize wet areas with shower functionality, retiling, and upgraded
          water-heating strategy.
        </Text>
        <Text>
          · Improve comfort: sound dampening, humidity control, new flooring,
          and dedicated second-internet infrastructure.
        </Text>
        <Text>
          · Maximize storage — closet to ceiling, under-stair, built-in entry,
          purpose-built pantries.
        </Text>
        <Text>· Extend exterior utility with dedicated hose access.</Text>
      </Stack>

      <H3>Scope by floor</H3>
      <Table
        headers={["Floor / space", "Priority", "Target outcome"]}
        columnAlign={["left", "left", "left"]}
        rowTone={[
          "success",
          "success",
          "success",
          "success",
          "success",
          undefined,
          "success",
          "success",
          "success",
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          "success",
          undefined,
          "success",
        ]}
        rows={[
          [
            "Top floor — Kitchen",
            "Must-have",
            "Transform existing bedroom into L-shaped kitchen + island tied into concealed gas/water stubs (Second Rider). Bring down existing closet to create pantry; include dishwasher, exterior range vent, and tile flooring. Replumb + finish — not new utility runs.",
          ],
          [
            "Top floor — Primary bath",
            "Must-have",
            "Add shower function to the existing tub (e.g. shower head/controls and splash protection as needed). Retile entire floor or regrout if tile is sound. Tankless water heater with bypass to existing boiler — both systems usable and serviceable independently.",
          ],
          [
            "Top floor — Primary bath upgrade",
            "Nice-to-have",
            "Remove tub and convert to a standalone standing shower / wet-area upgrade if budget allows. Not required for the must-have scope because adding shower function to the tub satisfies the bathing requirement.",
          ],
          [
            "Top floor — Bedroom",
            "Must-have",
            "Remove drywall near bed area to reshape volume, sight lines, and light (confirm structure). Rebuild closet full-height to ceiling with custom interior fit-out.",
          ],
          [
            "Top floor — Living room",
            "Must-have",
            "Close existing banister opening; construct full-height wall with transom above door to top floor.",
          ],
          [
            "Top floor — Living room (continued)",
            "Must-have",
            "Second dedicated cable run for separate internet service (chase with framing) with termination point coordinated before walls are closed.",
          ],
          [
            "Top floor — Flooring",
            "Nice-to-have",
            "Sound-dampening flooring across the entire top floor with new flooring — one continuous acoustic and finish system.",
          ],
          [
            "Ground floor — Living / parlor",
            "Must-have",
            "Take down the existing wall separating living room and parlor to create a larger, flexible open zone. This is a removal scope, not a wall relocation; confirm whether the wall is load-bearing before bidding.",
          ],
          [
            "Ground floor — Parlor",
            "Nice-to-have",
            "Reprogram parlor as dedicated bedroom: layout, egress, lighting, closet/storage, bedroom-standard finish-out.",
          ],
          [
            "Ground floor — Kitchen",
            "Must-have (partial)",
            "Add corner pantry with corrected door swing/access. Refresh L-shaped booth seating. Must-have scope stops here.",
          ],
          [
            "Ground floor — Kitchen (partial)",
            "Nice-to-have",
            "Add cabinets above existing cabinetry for additional storage without triggering the full kitchen overhaul.",
          ],
          [
            "Ground floor — Kitchen (continued)",
            "Nice-to-have",
            "Full overhaul: reverse/reorient doors, custom cabinetry + island, ice maker, pocket doors at kitchen boundary, appliance package matching upstairs kitchen quality.",
          ],
          [
            "Ground floor — Entry",
            "Nice-to-have",
            "Built-in coat cubbies and shoe storage adjacent to stairs — architectural entry moment, not loose furniture.",
          ],
          [
            "Basement — Under-stair",
            "Nice-to-have",
            "Purpose-built storage built into the wall under the stairs, integrated with stair refurbishment — finish, structure, and access as one element.",
          ],
          [
            "Basement — Moisture & floor",
            "Must-have (moisture)",
            "Test-first moisture strategy: epoxy, concrete paint, or penetrating sealant — architect recommends best system from test results. Full basement flooring replacement is nice-to-have; coordinate with moisture assembly if pursued.",
          ],
          [
            "Exterior — Hose bib + outlet",
            "Must-have",
            "New exterior spigot and weather-rated electric outlet out front — practical location, freeze-protected plumbing, GFCI/weatherproof electrical protection, coordinated penetration details.",
          ],
        ]}
      />

      <H3>For architect to resolve early</H3>
      <Table
        headers={["Topic", "Decision needed"]}
        rows={[
          [
            "Structural",
            "Which walls are load-bearing (living/parlor knockdown, banister closure, bedroom drywall removal)?",
          ],
          [
            "Kitchen parity",
            "Align appliance, island, and pantry specs between top and ground floors.",
          ],
          [
            "Plumbing / HVAC",
            "Tankless + boiler bypass routing; stove vent path to exterior.",
          ],
          [
            "Acoustics",
            "Sound-dampening floor assembly for entire top floor (nice-to-have).",
          ],
          [
            "Basement moisture",
            "Test-first before selecting seal vs. paint vs. epoxy.",
          ],
          [
            "Infrastructure",
            "Second internet cable path, chase locations, and termination point (must-have).",
          ],
        ]}
      />

      <H3>Suggested deliverables to request</H3>
      <Stack gap={4}>
        <Text>
          1. Existing conditions (dimensions, structure, MEP).
        </Text>
        <Text>
          2. Schematic design per floor — all wall removals, openings, and
          built-ins.
        </Text>
        <Text>
          3. Kitchen layouts (both floors) with appliance and venting schedules.
        </Text>
        <Text>
          4. Bathroom wet-area details and tile/finish elevations.
        </Text>
        <Text>
          5. Stair + under-stair wall storage design development.
        </Text>
        <Text>
          6. Basement moisture recommendation and flooring spec.
        </Text>
        <Text>
          7. Phasing plan if construction proceeds by floor or zone (must-haves
          in Phase 1).
        </Text>
      </Stack>

      <H3>Phased budget — must-haves vs. full vision</H3>
      <Text tone="secondary">
        Cost bands assume{" "}
        <Text weight="semibold">utilities already separated</Text> (3 × 100A
        service, independent 60A sub-panels per floor, per-floor gas/water).
        Phase 1 is mostly drywall, tie-ins to existing concealed kitchen
        rough-ins, tankless + tub shower work, and banister closure — not new
        metering or full utility runs. NYC licensed-GC, permitted, mid-2026.
      </Text>
      <Table
        headers={[
          "Phase",
          "Scope",
          "Cost band",
          "Value add (mid)",
          "Notes",
        ]}
        columnAlign={["left", "left", "right", "right", "left"]}
        rowTone={[
          "success",
          "success",
          "success",
          "success",
          "success",
          "success",
          undefined,
          undefined,
          undefined,
        ]}
        rows={[
          [
            "1A — Must-haves (design)",
            "Top-floor kitchen (tie-in to existing gas/water stubs) · bath (add shower to tub, tile/regrout, tankless+bypass) · bedroom drywall + closet · banister wall + transom · second internet cable chase · remove GF living/parlor wall · GF pantry + booth · basement moisture · front hose spigot + outlet",
            "$38–76k",
            "$110–185k",
            "Second Rider: concealed plumbing remains behind sheetrock — kitchen is replumb + finish, not new service runs. Banister closure separates upstairs from stair opening.",
          ],
          [
            "1B — Legal 2-family close-out",
            "Fire-rated unit-entry door, smoke/CO, separate locks, DOB/LNO filing — utilities and sub-panels already in place; optional unit-2 cold-climate heat pump if renting ($4–10k add-on)",
            "$4–10k",
            "$530–715k",
            "Highest ROI line, but low cash cost here because metering and sub-panels are done. Coordinate permit with kitchen/bath filing.",
          ],
          [
            "1C — Non-architectural due diligence",
            "Cellar ACP back-file; sewer lateral camera scope. Mini-split replacement is excluded from architect scope because the $6.5k quote has already been credited.",
            "$3.5–25k",
            "$35–75k",
            "Track separately from architectural bidding. Include only if you want the same planning packet to show post-closing risk items.",
          ],
          [
            "Architectural Phase 1 total",
            "1A + 1B only",
            "$42–86k",
            "$640–900k",
            "Must-have design + legal close-out only. Excludes credited mini-splits and other non-architectural due diligence.",
          ],
          [
            "2 — Full vision (nice-to-have)",
            "GF kitchen full overhaul (pocket doors, island, ice maker) · sound-dampening flooring entire top floor with new flooring · parlor → bedroom · entry built-ins · under-stair wall storage + stair refurb · basement floor replacement",
            "$115–215k",
            "$80–150k",
            "Lifestyle and resale lift. Phase after must-haves and rental cash flow.",
          ],
          [
            "3 — Deferred maintenance",
            "Roof + R-49 insulation · backyard deck/fence · cosmetic refresh · rear brick · front entry safety",
            "$58–115k",
            "$86–156k",
            "Original Phase 2 items — schedule yr 2–4, not blocked by must-haves.",
          ],
          [
            "Full project total",
            "Phases 1–3",
            "$222–442k",
            "—",
            "Must-haves + close-out (~$42–86k) achieve legal 2-family + owner program; full vision is incremental.",
          ],
        ]}
      />

      <Divider />

      <H2>Appraisal &amp; financing the renovation</H2>
      <Text tone="secondary">
        Bank appraisal (E-Value Appraisals, eff. 6/18/2026) and Rocket Mortgage
        loan terms. Analysis of how to fund a $40–90k renovation: reduce the
        down payment vs. a HELOC. Not financial advice — confirm with your
        lender and a CPA before locking.
      </Text>

      <Grid columns={4} gap={12}>
        <Stat value="$1.26M" label="Appraised value (> $1.25M price)" tone="success" />
        <Stat value="$10k" label="Appraisal cushion over contract" tone="success" />
        <Stat value="Single-family" label="Appraised & financed use" tone="info" />
        <Stat value="C3 / Q4" label="Condition / quality — no repairs noted" tone="success" />
      </Grid>

      <Callout tone="success" title="The appraisal de-risks your financing">
        <Text>
          The property appraised at <Text weight="semibold">$1,260,000</Text>,
          $10k above the $1.25M contract — so there is{" "}
          <Text weight="semibold">no appraisal gap</Text> and no extra cash
          needed to cover a shortfall. The appraiser rated it{" "}
          <Text weight="semibold">C3, &quot;no repairs needed,&quot;</Text> with
          kitchen and baths remodeled in the last 1–5 years. Note it was valued
          and is being financed <Text weight="semibold">as a single-family,
          owner-occupied primary residence</Text> (the legal 2-family is
          currently used as one home); the income approach was not developed.
        </Text>
      </Callout>

      <H3>Loan options on the table</H3>
      <Table
        headers={[
          "Option",
          "Down payment",
          "Rate",
          "MI / mo",
          "Total monthly (PITI + MI)",
          "Notes",
        ]}
        columnAlign={["left", "right", "right", "right", "right", "left"]}
        rowTone={["warning", "success", "info", undefined]}
        rows={[
          [
            "A — 10% down",
            "$125,000",
            "6.750%",
            "$140.63",
            "$8,005.53",
            "Frees ~$62,500 of cash vs. 15% down — but the higher rate applies to the entire $1,125,000 loan and MI is higher.",
          ],
          [
            "B — 15% down",
            "$187,500",
            "6.500%",
            "$80.00",
            "$7,363.90",
            "Lower rate on the full $1,062,500 loan, lower MI, faster MI removal. Rocket loan is currently set up this way.",
          ],
          [
            "HELOC (add-on to B)",
            "—",
            "10.75% / 20yr",
            "—",
            "$507.62 on $50k drawn",
            "Funds the renovation; only the drawn balance bears interest and your first-mortgage rate stays at 6.50%.",
          ],
        ]}
      />

      <H3>True cost of each way to fund the renovation</H3>
      <Table
        headers={[
          "Funding source",
          "Effective annual cost (yr 1)",
          "Raises your 1st-mortgage rate?",
          "Verdict",
        ]}
        columnAlign={["left", "right", "left", "left"]}
        rowTone={["success", "success", "danger"]}
        rows={[
          [
            "Pay cash from reserves",
            "~0% (opportunity cost only)",
            "No",
            "Cheapest — if you keep a safety + HVAC/roof reserve after closing.",
          ],
          [
            "HELOC $50k @ 10.75% / 20yr",
            "10.75% on drawn balance",
            "No",
            "Best borrowed-money option. Flexible bridge; repay or refinance later.",
          ],
          [
            "Drop to 10% down (frees $62.5k)",
            "~12.2% blended",
            "Yes — +0.25% on the whole $1.06M loan + higher MI",
            "Most expensive. Avoid.",
          ],
        ]}
      />

      <Callout tone="info" title="Bottom line: the HELOC is cheaper than reducing your down payment">
        <Stack gap={6}>
          <Text>
            Going from 15% down to 10% down raises your monthly payment by{" "}
            <Text weight="semibold">$641.63</Text> ($8,005.53 vs $7,363.90) to
            free ~$62,500 of cash. Almost all of that increase is interest and
            MI, not principal — about{" "}
            <Text weight="semibold">$7,600/yr</Text>, an effective{" "}
            <Text weight="semibold">~12.2%</Text> cost on the $62,500. That is
            higher than the HELOC&apos;s 10.75%, because dropping to 10% down
            bumps the rate <Text weight="semibold">0.25% on the entire
            $1,062,500</Text> you would borrow anyway (~$2,650/yr of pure
            penalty) and raises MI ~$60/mo.
          </Text>
          <Text>
            <Text weight="semibold">Smartest structure:</Text> take{" "}
            <Text weight="semibold">Option B (15% down, 6.50%)</Text> to lock the
            lower rate and lower MI on the whole loan, fund as much of the
            renovation as prudent from <Text weight="semibold">cash</Text>, and
            use the <Text weight="semibold">HELOC only for the remainder</Text>.
            The HELOC is a short-term bridge: after the renovation, the
            $1.26M-plus appraisal supports dropping MI on reappraisal and/or a
            cash-out refinance to retire the HELOC at first-mortgage rates.
          </Text>
          <Text tone="secondary">
            Tax note: your acquisition debt already exceeds the $750k
            mortgage-interest cap (MFJ), so the marginal interest on either route
            is largely non-deductible — roughly a wash. Confirm with a CPA.
          </Text>
        </Stack>
      </Callout>

      <Callout tone="info" title="Exit path: clearing PMI and the HELOC by reappraisal or refinance (possible, not guaranteed)">
        <Stack gap={6}>
          <Text>
            Because the renovation should raise the home&apos;s value, a{" "}
            <Text weight="semibold">second appraisal after the work is
            completed</Text> could let you shed the mortgage insurance and unwind
            the HELOC. There are two distinct mechanisms — and each has timing
            limits, so this is a plausible plan, not a certainty.
          </Text>
          <Text>
            <Text weight="semibold">1. Cancel PMI on the existing loan (no
            refinance).</Text>{" "}
            You can ask the servicer to cancel PMI once a new appraisal shows you
            at or below ~80% LTV on <Text weight="semibold">current</Text> value.
            The catch is seasoning: Fannie/Freddie servicers generally want the
            loan <Text weight="semibold">~2 years old</Text> to use a new
            appraisal at 80% (or ~5 years at 75%) — though the 2-year wait is
            often <Text weight="semibold">shortened or waived when the equity gain
            comes from documented improvements</Text>. You pay for the appraisal
            (~$500–900). PMI also auto-terminates at 78% LTV of the original value
            on the amortization schedule regardless.
          </Text>
          <Text>
            <Text weight="semibold">2. Refinance into a new first mortgage.</Text>{" "}
            If the post-work appraisal puts you at ≤80% LTV, a refinance carries{" "}
            <Text weight="semibold">no PMI</Text>, and the{" "}
            <Text weight="semibold">HELOC balance can be folded into the new
            loan</Text> — eliminating the separate HELOC payment. Rate/term refis
            usually have little or no seasoning; cash-out refis (which a HELOC
            payoff can trigger) typically need <Text weight="semibold">~6–12
            months</Text> of seasoning. A refinance only makes sense if rates at
            that time produce a blended payment you like.
          </Text>
          <Text tone="secondary">
            One clarification: a <Text weight="semibold">HELOC does not carry
            mortgage insurance</Text> — it just has its own higher, variable rate.
            So what you would be eliminating is (a) PMI on the first mortgage and
            (b) the HELOC balance itself. Whether and when either is achievable
            depends on the post-work appraised value, your servicer/investor
            rules, the seasoning windows above, and prevailing rates. Confirm the
            specifics with Rocket and your loan servicer before relying on it.
          </Text>
        </Stack>
      </Callout>

      <Callout tone="warning" title="Priorities recheck — single-family basis changes the value framing">
        <Stack gap={6}>
          <Text>
            The appraisal values this as a <Text weight="semibold">single-family
            home</Text> on sales comps (~$750–865/sf), supporting ~$1.26–1.4M —
            <Text weight="semibold"> not</Text> the $1.85–2.1M figure that
            depends on re-separating and renting a second unit. Your defined
            must-haves (kitchen, bath shower + tankless, bedroom/closet,
            banister wall, GF open-plan, pantry/booth, basement moisture, hose
            bib + outlet) are <Text weight="semibold">lifestyle and
            value-maintaining</Text> on a single-family basis — reasonable, and
            fundable inside the $42–86k Phase 1 band — but they will not move the
            appraised value as much as the income-based 2-family projection.
          </Text>
          <Text>
            The <Text weight="semibold">restore-the-2-family</Text> play remains
            the single highest-ROI move (~$530–715k of capitalized value), but it
            is <Text weight="semibold">not in your must-haves</Text> and is not
            reflected in how you are financing the home. Treat it as an optional
            future income project, not part of this renovation.
          </Text>
          <Text>
            The appraiser is <Text weight="semibold">not</Text> a systems
            inspector — &quot;no repairs needed&quot; does not override the
            5/20/2026 inspection. The mini-split replacement ($6,500) is already
            credited and excluded from architect scope; the roof (yr 2–4) and a
            pre-closing sewer scope still stand as separate due-diligence items.
          </Text>
        </Stack>
      </Callout>

      <Divider />

      <H2>Value-improvement priorities</H2>
      <Text tone="secondary">
        Ranked by projected return on dollars actually spent <em>by you</em>{" "}
        (i.e. after seller credits). Cost ranges are NYC retail (licensed GC,
        permitted work, Brooklyn row-house pricing, mid 2026). Value impact
        uses comparable Sunset Park / Greenwood / Park Slope sales and current
        4.5–5% rental cap rates for income items.
      </Text>

      <Callout
        tone="success"
        title="The single highest-ROI move is still: restore the legal 2-family"
      >
        <Text>
          Two inspection facts make this the top ROI move: (a) electrical
          service is <Text weight="semibold">3 × 100A</Text> with{" "}
          <Text weight="semibold">independent 60A sub-panels per floor</Text>{" "}
          — the building is already physically wired for per-floor metering;
          (b) the ground floor has its own kitchen, full bath, and separate
          front entry.           Remaining separation work: tie existing concealed gas/water into a
          new top-floor kitchen, close the banister opening (wall + transom),
          fire-rated unit-entry door, and DOB close-out — not new metering or
          sub-panels. Sunset
          Park 1–2 BR floor-throughs rent $3,000–$4,000/mo (~$25–34k net). At
          a 4.75% cap that&apos;s{" "}
          <Text weight="semibold">$530k–$715k of value</Text> on roughly{" "}
          <Text weight="semibold">$42–86k</Text> of owner must-have work plus{" "}
          <Text weight="semibold">$4–10k</Text> legal close-out (utilities
          already separated). ROI ~12–18× on the separation economics; finish
          scope is mostly drywall and replumb tie-ins.
        </Text>
      </Callout>

      <H3>Unit-2 heating &amp; hot-water separation — legal requirements</H3>
      <Text tone="secondary">
        Architect guidance (Jun 2026): upstairs rental should have its own heat
        and, for clean unit separation, its own domestic hot water. Not legal
        advice — confirm final design with architect/PE, DOB, and counsel before
        permitting.
      </Text>

      <Callout tone="info" title="Bottom line: no second boiler required — but you cannot offload heat to the tenant">
        <Stack gap={6}>
          <Text>
            NYC does <Text weight="semibold">not</Text> require a second
            boiler. A dedicated cold-climate mini-split heat pump on the
            tenant&apos;s electric meter can satisfy compliant space heat for
            unit 2. What you{" "}
            <Text weight="semibold">cannot</Text> do is make the tenant
            &quot;rely on&quot; an existing AC head and walk away — as
            landlord, you must provide code-compliant heat during heat season
            (Oct 1–May 31).
          </Text>
          <Text>
            Hot water: HMC requires <Text weight="semibold">120°F at fixtures,
            year-round, 24/7</Text> in each dwelling unit — not a separate
            heater per unit. The existing boiler-fed indirect tank{" "}
            <Text weight="semibold">can legally serve both units</Text> if it
            reliably delivers that temperature upstairs. A dedicated electric
            tankless or small tank on the tenant meter is{" "}
            <Text weight="semibold">strongly recommended</Text> (not an HMC
            minimum) so the tenant pays their own DHW and the units are truly
            independent; otherwise you heat their water on your gas bill. Keep
            the boiler + indirect tank for the owner unit either way.
          </Text>
        </Stack>
      </Callout>

      <Table
        headers={["Topic", "Legal standard (HMC)", "Recommended for 242 45th separation", "What does not work"]}
        rows={[
          [
            "Space heat (unit 2)",
            "68°F daytime (6 AM–10 PM) when outdoor temp < 55°F; 62°F overnight (10 PM–6 AM). Landlord duty — Class C violation if failed.",
            "New cold-climate mini-split sized via Manual J, on tenant sub-meter. Isolate upstairs baseboard from shared boiler loop. Optional: keep boiler zone as backup only if designed that way.",
            "Existing 12–13 yr Fujitsu as sole heat (not cold-climate rated; only 1 of 3 units works). Shared boiler thermostat/zone with no physical separation. Contract language shifting heat duty to tenant.",
          ],
          [
            "Domestic hot water (unit 2)",
            "120°F year-round, 24/7 at fixtures in each dwelling unit. Shared central DHW is legal if both units receive compliant temperature.",
            "Dedicated electric tankless or 30–50 gal electric tank on tenant meter — for billing, decoupling from boiler service, and true unit independence. Size for fixture count + panel load.",
            "No hot water or chronic under-temperature at upstairs fixtures. Expecting tenant to use stove/space heater for water.",
          ],
          [
            "Second boiler",
            "Not required if another compliant heat source serves the unit.",
            "Skip — adds ~$8–15k+ (boiler, gas line/meter, venting, permit) vs ~$4–10k for cold-climate heat pump + optional ~$2–6k for electric DHW.",
            "Assuming architect meant boiler specifically rather than independent heat.",
          ],
          [
            "Utility / meter separation",
            "No HMC rule mandating separate DHW equipment; sub-metering is a practical separation goal, not a hot-water habitability minimum.",
            "Existing 60A upstairs sub-panel + Con Ed sub-metering (already in separation budget). Verify panel capacity for heat-pump heating draw (much higher than cooling).",
            "Landlord-paid gas for upstairs baseboard or tenant DHW while unit is rented — legal to rent, but poor economics and weak unit independence.",
          ],
        ]}
      />

      <Text tone="tertiary" size="small">
        Incremental cost for unit-2 space heat (above base separation line):
        ~$4–10k for a cold-climate mini-split plus hydronic zone isolation.
        Add ~$2–6k for dedicated electric DHW if you want tenant-paid hot
        water and decoupling from the boiler — recommended, not required by
        HMC. Still cheaper than a second boiler. Budget a new upstairs heat
        pump regardless — the existing unit is the only working head and is
        near end of life. DOB plans or lender conditions for your specific
        separation filing may specify independent utilities even when base code
        does not.
      </Text>

      <Callout tone="warning" title="The single biggest cost drag is the HVAC failure">
        <Text>
          Two of three mini-splits failed at inspection. Even with a generous
          seller credit ($10–18k is realistic), expect to put another
          $2–7k of your own money in. This drops the property's overall ROI
          but is{" "}
          <Text weight="semibold">also</Text> a leverage point: a
          documented inspection failure is a clean basis for a price reduction
          on top of the credit. Don't waive the contingency without resolving
          this.
        </Text>
      </Callout>

      <H3>Projected value impact vs cost (owner scope)</H3>
      <BarChart
        categories={[
          "2-family separation + heat",
          "Top-floor kitchen",
          "Top-floor bath",
          "Wall removal + banister + closet",
          "GF wall removal + pantry/booth",
          "Basement + hose/outlet",
          "Cellar + sewer de-risk",
          "Full vision (Phase 2)",
          "Roof + deferred (Phase 3)",
        ]}
        series={[
          {
            name: "Cost (midpoint, $k)",
            data: [7, 22, 10, 12, 8, 4, 10, 165, 87],
            tone: "warning",
          },
          {
            name: "Projected value add ($k)",
            data: [620, 45, 25, 30, 40, 10, 31, 115, 121],
            tone: "success",
          },
        ]}
        height={300}
        valueSuffix="k"
      />
      <Text tone="tertiary" size="small">
        Midpoint cost vs projected sale-value add (or capitalized rental income
        for separation). Phase 1 assumes existing utility separation and
        concealed kitchen rough-ins — tie-in work, not new infrastructure.
      </Text>

      <H3>Detailed renovation budget &amp; ROI (aligned to owner brief)</H3>
      <Table
        headers={[
          "#",
          "Initiative",
          "Cost (net to you)",
          "Value add",
          "ROI",
          "Notes",
        ]}
        columnAlign={["right", "left", "right", "right", "right", "left"]}
        rowTone={[
          "success",
          "success",
          "success",
          "success",
          "success",
          "success",
          "success",
          "success",
          "info",
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
        ]}
        rows={[
          [
            "1",
            "Legal 2-family close-out: fire-rated unit door, smoke/CO, separate locks, DOB/LNO filing — utilities already separated (3 × 100A, per-floor 60A sub-panels)",
            "$4–10k",
            "$530–715k",
            "~50×+",
            "Highest ROI, lowest cash: no new metering or sub-panel work. Add ~$4–10k for unit-2 cold-climate heat pump if renting upstairs. Tankless in bath (must-have) ties to existing rough-ins.",
          ],
          [
            "2",
            "Top-floor kitchen (must-have): transform existing bedroom into L-shaped kitchen + island; tie existing concealed gas/water stubs into new sink/range/DW; bring down closet for pantry; exterior range vent; cabinetry + tile flooring",
            "$15–28k",
            "$35–55k",
            "~1.8×",
            "Second Rider confirms plumbing remains behind sheetrock — replumb and finish, not new service runs from cellar. Scope includes bedroom-to-kitchen conversion and closet-to-pantry work.",
          ],
          [
            "3",
            "Top-floor bath (must-have): add shower function to existing tub, retile floor or regrout, tankless water heater with boiler bypass",
            "$6–14k",
            "$18–32k",
            "~2×",
            "Must-have is shower functionality, not tub removal. Standalone shower / wet-room conversion is Phase 2 nice-to-have.",
          ],
          [
            "4",
            "Top-floor bedroom + banister (must-have): drywall removal near bed + full-height closet; close banister opening with full wall + transom above door",
            "$7–17k",
            "$20–35k",
            "~1.8×",
            "Mostly framing and drywall. Banister closure is the physical unit separation at the stair — confirm structure before fixed-price bid.",
          ],
          [
            "5",
            "Ground floor open plan + kitchen partial (must-have): take down living/parlor wall, corner pantry, booth refresh — not full kitchen overhaul",
            "$8–18k",
            "$25–45k",
            "~2×",
            "Existing wall comes down; it does not move. Cost varies only if a beam or structural header is required. Full GF kitchen overhaul ($55–95k) is Phase 2 nice-to-have.",
          ],
          [
            "6",
            "Basement moisture + exterior utility (must-have): test-first seal/coating; freeze-protected front hose spigot + weather-rated outlet",
            "$3–8k",
            "$6–15k",
            "~1.5×",
            "Moisture test ($500–1k) before selecting seal system. Exterior outlet should be GFCI/weatherproof. Full basement floor replacement is Phase 2.",
          ],
          [
            "7",
            "Cellar paperwork de-risk + sewer lateral camera scope",
            "$3.5–25k",
            "$15–75k",
            "~3×",
            "Back-file basement finishes; camera $400–800. Repair budget only if scope shows defects — insurance against $40–80k emergency.",
          ],
          [
            "8",
            "Full vision nice-to-haves (Phase 2): GF kitchen overhaul, sound-dampening flooring entire top floor with new flooring, parlor → bedroom, entry built-ins, storage built into wall under stairs, basement floor",
            "$115–215k",
            "$80–150k",
            "~0.7×",
            "Lifestyle and resale lift — defer until Phase 1 complete and rental cash flow established.",
          ],
          [
            "9",
            "Roof replacement (Phase 3, yr 2–4): modified-bitumen / TPO + parapet flashing + R-49 insulation",
            "$28–48k",
            "$45–70k",
            "~1.5×",
            "14–16 yrs old of 18–20 yr life. Don't defer past yr 4.",
          ],
          [
            "10",
            "Backyard upgrade: composite deck, planters, fence, low-volt lighting",
            "$15–30k",
            "$25–40k",
            "~1.4×",
            "Phase 3 deferred. Rear yard is weakest exterior element.",
          ],
          [
            "11",
            "Cosmetic refresh + electrical-safety punch list + front entry safety + rear brick",
            "$15–37k",
            "$41–86k",
            "~2×",
            "Repaint, refinish GF floor, panel covers, handrails, walkway, Bilco seal, rear repointing — batch between rental turns or pre-sale.",
          ],
          [
            "12",
            "Boiler service contract (NOT replace) + circulator-pump oiling + monitor sump",
            "$0.3–1k / yr",
            "Extends life 5–7 yrs",
            "—",
            "2013 boiler + 2019 indirect tank — 5+ yrs remaining. Annual service only.",
          ],
        ]}
      />

      <H3>Recommended phased budget</H3>
      <Grid columns={2} gap={16}>
        <Card>
          <CardHeader>Phase 0 — pre-signing / pre-closing (contract leverage)</CardHeader>
          <CardBody>
            <Stack gap={4}>
              <Text>
                Goal: amend the proposed contract and convert inspection
                findings into binding closing conditions. The draft contract
                has no inspection contingency — only R-21 working-systems
                language and a $500 PCDS credit.
              </Text>
              <Text>· Amend R-28: seller must cure open permit + CO/LNO</Text>
              <Text>· R-21 repair or credit: 2 failed mini-splits</Text>
              <Text>· R-21 repair: sub-panel covers + labeling</Text>
              <Text>· Negotiate punch list: handrails, walkway, Bilco gap</Text>
              <Text>· Confirm lender OK with removed kitchen (Second Rider)</Text>
              <Text weight="semibold">Target concessions: $14–28k credit + permit cure</Text>
              <Text tone="secondary">
                Without contract amendments, post-signing you rely on R-21 at
                closing only — and R-29 discharges seller upon deed acceptance.
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Phase 1 — within 6 months of closing (must-haves)</CardHeader>
          <CardBody>
            <Stack gap={4}>
              <Text>
                Goal: execute owner must-haves, restore legal 2-family separation,
                and clear inspection/legal de-risk items.
              </Text>
              <Text>· Top-floor kitchen (tie-in to existing gas/water stubs)</Text>
              <Text>· Top-floor bath: add shower to tub, tile/regrout, tankless + bypass</Text>
              <Text>· Bedroom drywall removal + full-height closet</Text>
              <Text>· Banister closure: full wall + transom (separates unit from stair)</Text>
              <Text>· Second dedicated internet cable chase</Text>
              <Text>· GF open plan: take down living/parlor wall</Text>
              <Text>· GF kitchen: pantry + booth refresh (not full overhaul)</Text>
              <Text>· Basement moisture mitigation (test-first)</Text>
              <Text>· Front exterior hose spigot + weather-rated outlet</Text>
              <Text>· Legal close-out: fire door, smoke/CO, DOB filing (utilities already done)</Text>
              <Text>· Cellar back-file + sewer scope tracked separately if desired</Text>
              <Text weight="semibold">Architectural budget: $42–86k (excludes credited mini-splits)</Text>
              <Text tone="secondary">
                Expected outcome: legal unit-separated 2-family, owner must-haves
                complete, $36–48k/yr gross rent on non-owner unit. Cash scope is
                mostly drywall, replumb tie-ins, bath work, and one GF wall
                coming down — not new utility infrastructure.
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Phase 2 — years 1–3 (full vision nice-to-haves)</CardHeader>
          <CardBody>
            <Stack gap={4}>
              <Text>
                Goal: lifestyle upgrades and incremental resale lift — only after
                Phase 1 is complete and cash flow is established.
              </Text>
              <Text>· Full ground-floor kitchen overhaul (pocket doors, island, ice maker)</Text>
              <Text>· Sound-dampening flooring entire top floor with new flooring</Text>
              <Text>· Parlor → bedroom conversion</Text>
              <Text>· Entry built-in coat/shoe storage</Text>
              <Text>· Storage built into wall under stairs + stair refurbishment</Text>
              <Text>· Basement full floor replacement</Text>
              <Text weight="semibold">Budget: $115–215k</Text>
              <Text tone="secondary">
                Expected outcome: $80–150k additional resale lift + owner
                comfort upgrades. Not required for occupancy or separation.
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Phase 3 — years 2–4 (deferred maintenance)</CardHeader>
          <CardBody>
            <Stack gap={4}>
              <Text>Goal: roof, exterior, and cosmetic refresh.</Text>
              <Text>· Roof replacement + add R-49 roof insulation</Text>
              <Text>· Backyard: composite deck, fence, lighting</Text>
              <Text>· Cosmetic refresh + electrical punch list between turns</Text>
              <Text>· Rear brick repointing + front entry safety package</Text>
              <Text weight="semibold">Budget: $58–115k</Text>
              <Text tone="secondary">
                Expected outcome: $86–156k additional resale lift +
                $1.5–3k/yr operating cost reduction from insulation +
                heat-pump efficiency.
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Grid>

      <H3>Where the Phase 1–3 dollars go</H3>
      <Grid columns={2} gap={16}>
        <PieChart
          donut
          data={[
            { label: "Top-floor kitchen (tie-in)", value: 22, tone: "success" },
            { label: "2-family close-out", value: 7, tone: "success" },
            { label: "Top-floor bath", value: 13, tone: "success" },
            { label: "Banister + wall removal + closet", value: 12, tone: "success" },
            { label: "GF wall removal + pantry/booth", value: 8, tone: "success" },
            { label: "Full vision (Phase 2)", value: 165, tone: "info" },
            { label: "Roof + deferred (Phase 3)", value: 87, tone: "warning" },
            { label: "Basement + hose/outlet", value: 4 },
            { label: "Cellar + sewer de-risk", value: 10 },
          ]}
          size={240}
        />
        <Stack gap={6}>
          <Text weight="semibold">Architectural Phase 1: $42–86k</Text>
          <Text weight="semibold">Full project (Phases 1–3): $215–416k</Text>
          <Text tone="secondary">
            Phase 1 is dominated by kitchen tie-in, bath wet work, and drywall
            (banister closure, bedroom, one GF wall removal) — not utility
            separation, which is already in place. Credited mini-splits are not
            part of the architectural budget.
          </Text>
          <Text>
            <Text weight="semibold">Projected post-renovation value:</Text>{" "}
            $1.85–2.10M (vs $1.25M contract) once re-listed as a fully legal,
            unit-separated 2-family with must-haves complete and roof replaced.
          </Text>
          <Text>
            <Text weight="semibold">Cash-on-cash from rental:</Text> $25–34k
            net/yr house-hacking from the owner&apos;s floor.
          </Text>
          <Text>
            <Text weight="semibold">Holding cost reduction:</Text> $1.5–3k/yr
            from new mini-splits + roof insulation. Keep the 2013 boiler and
            2019 indirect tank on an annual service contract — both have 5+
            yrs of useful life remaining.
          </Text>
        </Stack>
      </Grid>

      <Callout
        tone="info"
        title="Pricing methodology and caveats"
      >
        <Stack gap={4}>
          <Text>
            · Costs are licensed-GC, permitted, mid-2026 NYC pricing. DIY or
            unlicensed work runs 30–50% less but voids most of the resale lift
            and creates exactly the kind of open-permit risk flagged in Tier 1.
          </Text>
          <Text>
            · Value-add figures use 4.5–5% rental cap rates for income items
            and recent Sunset Park / Greenwood Heights / Park Slope South sales
            ($800–$1,050 / sq ft of legal residential area) for capital
            improvements.
          </Text>
          <Text>
            · &quot;Net to you&quot; HVAC cost assumes a $10–18k seller credit
            for the two failed mini-splits. If the seller refuses, gross cost
            $12–25k applies and the line drops to ~1.5× ROI — but you also
            have a documented basis for a same-magnitude price reduction.
          </Text>
          <Text>
            · Numbers assume the Tier 1 due-diligence items above (open permit,
            no C of O, prior WWP violations) are cured before any work begins;
            otherwise expect 20–40% cost overrun from legalization back-charges.
          </Text>
          <Text>
            · Cellar finishing risk remains moderate, not catastrophic. The
            inspection couldn't assess foundation walls behind the LVP +
            drywall, so the back-filing of finish work is still the right
            mitigation. Worst case is a belated ACP filing — typically $3–10k.
          </Text>
          <Text>
            · Phase 1 budget reflects owner must-haves (see renovation brief
            above), not generic items like a 3rd upstairs bath or bedroom
            combine. Full ground-floor kitchen overhaul is Phase 2 nice-to-have.
          </Text>
          <Text>
            · Roof replacement is Phase 3 (yr 2–4): inspection clocks the
            existing rolled-rubber roof at 14–16 yrs of an 18–20 yr design
            life. Plan, don&apos;t panic — but don&apos;t defer past yr 4.
          </Text>
        </Stack>
      </Callout>

      <Divider />

      <H2>External records to pull before closing</H2>
      <Text tone="secondary">
        BIS is only one source. Order or pull these in parallel with the
        physical inspection — your attorney or title company handles most, but
        confirm.
      </Text>
      <Table
        headers={["Source", "What you're looking for", "Where"]}
        rows={[
          [
            "DOB NOW",
            "Any filings, jobs, or violations from 2021+ that don't appear in legacy BIS.",
            "nyc.gov/dobnow → public portal, search by BIN 3011473",
          ],
          [
            "HPD Online",
            "Housing Maintenance Code violations, complaints, registration status. (Not required as MD but check anyway.)",
            "hpdonline.nyc.gov, search address",
          ],
          [
            "ACRIS",
            "Deed history, mortgages, liens, UCCs, mechanic's liens, prior transfers and prices.",
            "a836-acris.nyc.gov, Block 745 Lot 26",
          ],
          [
            "DOF property tax",
            "Tax class, assessed value trend, abatements (J-51, SCHE/DHE, STAR), arrears.",
            "nyc.gov/finance → property records",
          ],
          [
            "DEP",
            "Water/sewer arrears, lead service line map, backflow/septic history.",
            "nyc.gov/dep · a826-water36.nyc.gov for billing",
          ],
          [
            "FDNY",
            "Any open FDNY violations, prior fires at the address.",
            "FDNY Business or FOIL request",
          ],
          [
            "DEC / OER",
            "Environmental site remediation, E-designations, spills near or on the block.",
            "NYS DEC Environmental Site Remediation Map · NYC OER Map",
          ],
          [
            "ZoLa",
            "Current zoning district, FAR, allowed uses, IBZ boundary, special districts.",
            "zola.planning.nyc.gov",
          ],
          [
            "Sidewalk violations",
            "Open DOT sidewalk violations are the owner's responsibility on transfer.",
            "nycdotsidewalks.nyc.gov",
          ],
          [
            "311 / DSNY",
            "Recurring complaints (noise, rats, illegal conversion, parking).",
            "311 service request lookup, NYC Open Data",
          ],
        ]}
      />

      <Divider />

      <H2>Questions to put to the seller in writing (post-inspection)</H2>
      <Stack gap={4}>
        <Text>
          1. <Text weight="semibold">(New from inspection)</Text> Provide a
          repair-or-credit response for each &quot;Repair or Replace&quot;
          item in the Massive Inspection report dated 5/20/2026 — specifically
          the two failed mini-splits, the upper-floor sub-panel cover, the
          main-level sub-panel open slot, front handrails, walkway, Bilco
          gap, basement stair risers, upper-bath light, main-bath fan, and
          kitchen cooktop igniter.
        </Text>
        <Text>
          2. If listing photos show ceiling discoloration above the mechanical
          room, disclose cause and any prior repair (not flagged in the
          5/20/2026 inspection).
        </Text>
        <Text>
          3. <Text weight="semibold">(New from inspection)</Text> Provide
          ACP-5 / ACP-7 filings or sworn statements confirming the cellar
          finish work (LVP, recessed lighting, partition walls, mini-split
          install) was performed with appropriate permits or qualifies as
          ordinary repair.
        </Text>
        <Text>
          4. Provide the DOB sign-off and final inspection paperwork for Job
          301532535. If unavailable, agree in the contract to close out the
          permit and bear the cost.
        </Text>
        <Text>
          5. Confirm in writing that no work has been performed on the building
          since the 2003 A2 permit other than ordinary repairs not requiring a
          permit; list any exceptions.
        </Text>
        <Text>
          6. Provide the lead paint disclosure (federal Title X) and any prior
          XRF or risk assessment.
        </Text>
        <Text>
          7. Confirm in writing that the building has only two dwelling units
          and the cellar is not used or rented as a separate dwelling.
        </Text>
        <Text>
          8. Provide last three years of water/sewer bills and Con Ed bills
          (electric and gas) per unit — useful for inspector cross-checks and
          to spot a hidden third meter.
        </Text>
        <Text>
          9. Disclose any flooding, sewer back-up, mold remediation, or
          structural repair within the last 10 years.
        </Text>
        <Text>
          10. Provide proof of any homeowner&apos;s insurance claims filed at
          the property.
        </Text>
      </Stack>

      <Divider />

      <H2>Pros and cons — updated with full contract package</H2>
      <Text tone="secondary">
        Synthesis of the proposed May 2026 contract package (K – Proposed +
        Rider + Second Rider), 5/20/2026 inspection, BIS record, 2014 deed,
        FY26 DOF tax bill, DG deal sheet, Collinson closing-costs worksheet,
        and Randy Chang engagement letter. Not legal or financial advice.
      </Text>

      <Grid columns={2} gap={16}>
        <Card>
          <CardHeader>Pros</CardHeader>
          <CardBody>
            <Stack gap={6}>
              <Text>
                <Text weight="semibold">$25k below ask.</Text> Contract at
                $1.25M vs $1.275M list — improves entry basis before any
                seller credits.
              </Text>
              <Text>
                <Text weight="semibold">Legal 2-family with hidden upside.</Text>{" "}
                Contract (R-5, Second Rider) and 2014 deed (Doc 2014091701074001
                — &quot;DWELLING ONLY — 2 FAMILY&quot;) confirm 2-family
                classification. Ground floor already has its own kitchen,
                bath, and entry. Utilities already separated — close-out is
                fire door + filing (~$4–10k); must-have finish work ~$42–86k.
                Re-separation ROI still ~14× on capitalized rental income.
              </Text>
              <Text>
                <Text weight="semibold">Turn-key finishes.</Text> Updated
                kitchen, premium baths, refinished floors, finished basement
                studio — saves $40–80k vs gut renovation.
              </Text>
              <Text>
                <Text weight="semibold">Better-than-expected mechanicals.</Text>{" "}
                2013 boiler, 2019 indirect HW tank, 3 × 100A service with
                per-floor sub-panels — reduces Phase 1 electrical and boiler
                budget by $10–20k vs original assumptions.
              </Text>
              <Text>
                <Text weight="semibold">Extraordinarily low taxes.</Text>{" "}
                $3,696.96/yr (DOF FY26) = ~0.30% effective rate on the $1.25M
                contract price. Class 1 caps (6%/yr, 20%/5yr) keep this low
                even after appreciation — durable cash-flow advantage on a
                Brooklyn 2-family.
              </Text>
              <Text>
                <Text weight="semibold">DOF value supports the price.</Text>{" "}
                DOF estimated market value is $1,138,000 — only ~$112k below
                contract. Appraisal risk is low for a comp-supported number.
              </Text>
              <Text>
                <Text weight="semibold">Seller has room to negotiate.</Text>{" "}
                2014 deed transfer taxes back-solve to a ~$695k acquisition.
                At $1.25M he books ~$555k gross gain; a $14–28k credit is
                small relative to his profit and easy for him to absorb.
              </Text>
              <Text>
                <Text weight="semibold">Seller financial reps clean.</Text>{" "}
                Contract warrants no mortgage default, no foreclosure, taxes
                current (R-34). DOF Q3 bill confirms $0 outstanding charges
                — independent verification.
              </Text>
              <Text>
                <Text weight="semibold">R-21 closing protections.</Text>{" "}
                Seller must deliver working plumbing, heat, electric, and a
                leak-free roof at closing — your contractual hook for the
                failed mini-splits and panel hazards.
              </Text>
              <Text>
                <Text weight="semibold">Kitchen-removal mortgage out.</Text>{" "}
                Second Rider refunds deposit if lender denies commitment solely
                due to the removed upstairs kitchen. Concealed plumbing
                remains behind sheetrock — lowers your unit-2 build-out cost.
              </Text>
              <Text>
                <Text weight="semibold">Vacant delivery with teeth.</Text>{" "}
                Entire premises vacant within 7 days of closing; $75/day
                holdover penalty from $1,000 escrow.
              </Text>
              <Text>
                <Text weight="semibold">Solid local counsel + brokers.</Text>{" "}
                Randy Chang / Colin McGeough at a $3,000 flat fee covers
                contract through closing; Redfin (Altilio / Harmel) +
                Daniel Gale-Sotheby&apos;s (Daghmoumi / Becker), commissions
                paid by seller (5% total).
              </Text>
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Cons</CardHeader>
          <CardBody>
            <Stack gap={6}>
              <Text>
                <Text weight="semibold">No inspection contingency.</Text>{" "}
                As-is sale with PCDS waiver (R-37) and only a $500 inspection
                reimbursement — not a repair credit. You cannot automatically
                renegotiate or cancel for inspection items post-signing.
              </Text>
              <Text>
                <Text weight="semibold">R-28 permit / CO escape hatch.</Text>{" "}
                Seller can cancel and return deposit if CO or permit sign-offs
                are missing — exactly the situation here (open 2003 A2, no C of
                O). Seller is not obligated to cure.
              </Text>
              <Text>
                <Text weight="semibold">§10(a) violations deleted · R-14 $500 cap.</Text>{" "}
                Seller not required to clear DOB/ECB violations. Remediation
                capped at $500; you inherit unpermitted cellar finish risk.
              </Text>
              <Text>
                <Text weight="semibold">$12–25k HVAC failure.</Text> Two of
                three mini-splits failed at inspection. Contract gives R-21
                leverage but no guaranteed credit — must negotiate before
                signing or hold firm at the final walk-through.
              </Text>
              <Text>
                <Text weight="semibold">Mansion tax cliff at $1M.</Text>{" "}
                $1.25M crosses the residential mansion-tax threshold, adding a
                hard $12,500 to your closing costs that disappears entirely if
                the price renegotiates to ≤ $1,000,000. The PCDS-waiver
                $500 credit and DOF-value gap ($112k under contract) both
                support a price retrade as the negotiating lever.
              </Text>
              <Text>
                <Text weight="semibold">~$255k cash to close.</Text> $125k
                deposit + ~$130k additional cash + ~$46–48k closing costs.
                Mortgage tax ($19.2k) + mansion tax ($12.5k) alone is $31.7k
                — about 2.5% of price — and is on top of the price you pay.
              </Text>
              <Text>
                <Text weight="semibold">Financing mismatch.</Text> Contract
                §8 floor is a $900,000 commitment; your closing-costs worksheet
                plans for $1,000,000 (80% LTV). Have Chang amend §8 to match
                your actual loan target, or accept that a $900k commitment
                technically satisfies the contingency even if you wanted more.
              </Text>
              <Text>
                <Text weight="semibold">Removed upstairs kitchen.</Text>{" "}
                Current layout doesn&apos;t match legal 2-family use. Appraisal
                and mortgage underwriting risk until re-separated; lender may
                flag before you can execute the value-add plan.
              </Text>
              <Text>
                <Text weight="semibold">Roof near end of life.</Text> 14–16 yrs
                of 18–20 yr design life; $25–45k replacement in 2–4 yrs
                (Phase 2).
              </Text>
              <Text>
                <Text weight="semibold">IBZ location.</Text> Industrial Business
                Zone — residential grandfathered but neighbors can be
                industrial; noise/air/resale discount vs pure residential blocks.
              </Text>
              <Text>
                <Text weight="semibold">Lead paint + waived inspection.</Text>{" "}
                Pre-1960 building; you waived the 10-day lead inspection
                opportunity and released seller from lead liability (R-19).
              </Text>
              <Text>
                <Text weight="semibold">R-29 merger on deed.</Text> Once you
                accept the deed, seller is discharged — any R-21 breach must
                be resolved before closing, not after.
              </Text>
              <Text>
                <Text weight="semibold">7-day post-closing possession delay.</Text>{" "}
                Seller has up to 7 days after closing to vacate — not
                immediate keys-on-the-table delivery.
              </Text>
              <Text>
                <Text weight="semibold">Original waste lines + hidden foundation.</Text>{" "}
                Inspector flagged aging cast-iron drains; finished basement
                hides foundation/party walls. Sewer scope still outstanding.
              </Text>
              <Text>
                <Text weight="semibold">Attorney scope excludes tax planning.</Text>{" "}
                Engagement letter expressly excludes 1031, FIRPTA, capital
                gains, and accounting. You need a separate CPA for the
                house-hack income/depreciation model.
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Grid>

      <Callout tone="info" title="Bottom line">
        <Text>
          At $1.25M, the deal still pencils for a house-hack / 2-family
          restoration play — but the proposed contract shifts most of the
          risk to the buyer, and the closing costs ($46–48k of buyer-side
          charges on top of $1.25M) plus the seller&apos;s substantial 2014
          basis give you real negotiating room. Don&apos;t sign without:
          (1) amending §10(a) + R-14 + R-28 so the seller must cure the open
          permit and CO/LNO rather than cancel; (2) locking R-21 repairs or
          $14–28k in credits for the failed mini-splits and panel hazards;
          (3) amending §8 to the actual loan amount you&apos;ll commit to;
          (4) confirming your lender will commit on a legal 2-family with no
          C of O and a removed upstairs kitchen. If the seller won&apos;t
          amend, push for a price retrade — ideally to or below $1,000,000
          to clear the mansion tax — or walk. Your downside is small (1/3
          of a $3,000 flat fee, ~$1,000) and your upside is six figures.
        </Text>
      </Callout>

      <Divider />

      <H2>Quick reference links</H2>
      <Stack gap={4}>
        <Text>
          BIS{" "}
          <Link href="https://a810-bisweb.nyc.gov/bisweb/PropertyProfileOverviewServlet?bin=3011473&requestid=2">
            Property Profile (BIN 3011473)
          </Link>
        </Text>
        <Text>
          BIS{" "}
          <Link href="https://a810-bisweb.nyc.gov/bisweb/JobsQueryByLocationServlet?requestid=3&allbin=3011473">
            Jobs / Filings
          </Link>{" "}
          ·{" "}
          <Link href="https://a810-bisweb.nyc.gov/bisweb/ECBQueryByLocationServlet?requestid=3&allbin=3011473">
            OATH/ECB violations
          </Link>{" "}
          ·{" "}
          <Link href="https://a810-bisweb.nyc.gov/bisweb/ActionsByLocationServlet?requestid=3&allbin=3011473">
            Actions
          </Link>{" "}
          ·{" "}
          <Link href="https://a810-bisweb.nyc.gov/bisweb/COsByLocationServlet?requestid=3&allbin=3011473">
            C of O listing
          </Link>
        </Text>
        <Text>
          <Link href="https://zola.planning.nyc.gov/l/lot/3/745/26">
            ZoLa lot page (Block 745, Lot 26)
          </Link>{" "}
          ·{" "}
          <Link href="https://hpdonline.nyc.gov/hpdonline/">HPD Online</Link>{" "}
          ·{" "}
          <Link href="https://a836-acris.nyc.gov/CP/">ACRIS</Link>
        </Text>
      </Stack>
    </Stack>
  );
}
