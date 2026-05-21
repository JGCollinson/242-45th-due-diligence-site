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
          class B9 (2-family dwelling) · Sources: NYC DOB BIS (Property Profile,
          Jobs, OATH/ECB, Actions, C of O), Google Maps.
        </Text>
      </Stack>

      <Grid columns={5} gap={12}>
        <Stat value="0" label="Certificates of Occupancy on file" tone="warning" />
        <Stat value="1" label="Open A2 permit never signed off" tone="warning" />
        <Stat value="2 of 3" label="Mini-splits failed at inspection" tone="danger" />
        <Stat value="14–16 yr" label="Roof age (design life 18–20)" tone="warning" />
        <Stat value="3 × 100A" label="Electrical service (per-floor sub-panels)" tone="success" />
      </Grid>

      <Callout
        tone="danger"
        title="Top four things to resolve before you remove the inspection contingency"
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

      <H2>Listing snapshot (Redfin)</H2>
      <Grid columns={4} gap={12}>
        <Stat value="$1.275M" label="List price" />
        <Stat value="3 / 2" label="Bed / Bath" />
        <Stat value="2" label="Legal units (used as 1)" tone="info" />
        <Stat value="$3,696" label="Annual taxes" tone="success" />
      </Grid>
      <Text tone="secondary">
        17.33 x 100.17 ft lot · 2 stories above grade (~1,500 sf) + finished
        basement (~575 sf) · legal 2-family being sold as a single · MLS
        RLS20079085 · brick row-house with intact original cornice and
        brownstone window trim · ~$580 / sf inclusive of basement.
      </Text>

      <Divider />

      <H2>Photo, floor-plan, and inspection cross-check</H2>
      <Callout
        tone="warning"
        title="Property is turn-key on finishes — but the mechanicals are NOT what the photos suggested"
      >
        <Text>
          Photos show a finished home: updated kitchen, modern tiled bathrooms,
          refinished hardwood, mini-splits in every zone, and a heavily built-out
          basement. The inspection confirms most of that{" "}
          <Text weight="semibold">cosmetic</Text> story — but corrects the{" "}
          <Text weight="semibold">mechanical</Text> story in three big ways:
          (a) the mini-splits photographed everywhere are{" "}
          <Text weight="semibold">2 of 3 not working</Text>; (b) what looked
          like two old water heaters is actually one 2019 indirect tank + the
          2013 gas boiler that feeds it; (c) the electrical service is
          considerably better than assumed. Net: the dominant value lever is
          still legal 2-family restoration, and it's now{" "}
          <Text weight="semibold">cheaper</Text> on electrical but{" "}
          <Text weight="semibold">$10–20k more expensive</Text> on HVAC.
        </Text>
      </Callout>

      <H3>What changed after photo + inspection review</H3>
      <Table
        headers={["Item", "Earlier assumption", "Confirmed from photos + inspection", "Net impact"]}
        rowTone={[
          undefined,
          "danger",
          "success",
          "success",
          "warning",
          "success",
          undefined,
          undefined,
          undefined,
          "warning",
        ]}
        rows={[
          [
            "Total bathroom count",
            "Possibly need to add a 3rd bath",
            "Two baths confirmed — upper full, main 3/4 (stall + GFCI verified). Upper-bath light failed; main-bath fan loud + cover missing.",
            "Each unit gets a bath after separation. 3rd upstairs bath is now a marginal-ROI upgrade, not a necessity.",
          ],
          [
            "Heat pump / HVAC condition",
            "Mini-splits everywhere — assume $3–5k touch-ups",
            "Inspector: 2 of 3 Fujitsu mini-splits FAILED to start (main + basement). Upper-floor unit works. All units 12–13 yrs.",
            "Add $12–25k for two-zone replacement, or get equivalent seller credit. Biggest single inspection cost delta.",
          ],
          [
            "Electrical service",
            "60A or 100A pre-war service typical; sub-meter is a job",
            "Confirmed 3 × 100A main + two 60A sub-panels, one per floor. Copper branch wiring throughout.",
            "Removes $5–10k from the 2-family separation budget. The building is already physically configured for per-floor metering.",
          ],
          [
            "Sub-panel safety",
            "Not flagged",
            "Upper sub-panel cover doesn't seat over recessed breakers; main-level sub-panel has an open slot. Neither labeled.",
            "Add $1–2k for licensed electrician to make safe + label all panels — required before closing.",
          ],
          [
            "Boiler + hot water",
            "Boiler 20+ yrs old, retire + heat-pump water heater play",
            "Boiler is 2013 (12–13 yrs, fair). HW is 2019 indirect 50-gal Burnham fed by the boiler (6–7 yrs). One tank, not two.",
            "DELETE the heat-pump-WH retirement play — both systems have 5+ yrs of useful life. Save $5–10k.",
          ],
          [
            "Roof",
            "Standard NYC flat roof — defer",
            "Inspector: 14–16 yrs old, design life 18–20. Recently silver-coated as stopgap. No active leaks but near end of life.",
            "Schedule full roof replacement for Phase 2 (yr 2–4): $25–45k. Add roof insulation at the same time (none currently).",
          ],
          [
            "Facade repointing + stoop refresh",
            "$10–25k",
            "Front facade immaculate. Front handrails loose, walkway settled / cracked (trip hazard).",
            "Defer brick. $2–5k punch list on stoop / handrails / walkway. Critical if renting.",
          ],
          [
            "Cellar legal status",
            "Possible $150–300k upside if legalizable",
            "Cellar finished (LVP, recessed lights, music studio, mini-split, pool table). Inspector limited by finishes.",
            "Risk still moderate — back-file ACP for finishes/electric/mini-split if not on record. $3–10k.",
          ],
          [
            "Kitchen + master bath condition",
            "Recently renovated",
            "Kitchen: gray cabinets, quartz, gas cooktop (front-right igniter failed), wall oven (9–10 yrs). Master bath: high-end slate + walnut.",
            "Don't touch. Save the $40–80k. $200 cooktop-igniter fix on punch list.",
          ],
          [
            "Sewer / waste lines",
            "Not specifically flagged",
            "Inspector: main waste lines original to the building, mixed-material — anticipate repair/upgrade.",
            "Schedule pre-closing sewer-camera scope ($400–800). Budget $5–15k for partial relining within 5–10 yrs.",
          ],
        ]}
      />

      <Divider />

      <H2>Value-improvement priorities (post-inspection re-ranking)</H2>
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
          The inspection actually made this move{" "}
          <Text weight="semibold">cheaper</Text>, not more expensive. Two new
          facts confirm it: (a) electrical service is{" "}
          <Text weight="semibold">3 × 100A</Text> with{" "}
          <Text weight="semibold">independent 60A sub-panels per floor</Text>{" "}
          — the building is already physically wired for per-floor metering;
          (b) the ground floor has its own kitchen, full bath, and separate
          front entry. Remaining work is mostly upstairs: add a small kitchen
          in the family-room area, fire-rated unit-entry door at the top of
          the stair, sub-meter Con Ed, and separate gas/water shutoffs. Sunset
          Park 1–2 BR floor-throughs rent $3,000–$4,000/mo (~$25–34k net). At
          a 4.75% cap that's{" "}
          <Text weight="semibold">$530k–$715k of value</Text> on a revised{" "}
          <Text weight="semibold">$30–55k</Text> separation budget. ROI ~12–18×.
        </Text>
      </Callout>

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

      <H3>Projected value impact vs cost (priority initiatives, post-inspection)</H3>
      <BarChart
        categories={[
          "Re-separate 2-family",
          "HVAC: replace 2 mini-splits (net of credit)",
          "Roof replacement (Phase 2)",
          "Cellar de-risk (paperwork)",
          "Add 3rd bath upstairs",
          "Cosmetic refresh + electrical safety",
          "Backyard / deck",
          "Combine small bedroom",
          "Front entry safety package",
          "Rear brick + sewer scope",
        ]}
        series={[
          {
            name: "Cost (midpoint, $k)",
            data: [43, 6, 35, 7, 28, 10, 22, 10, 6, 12],
            tone: "warning",
          },
          {
            name: "Projected value add ($k)",
            data: [620, 30, 55, 27, 45, 35, 32, 27, 12, 14],
            tone: "success",
          },
        ]}
        height={280}
        valueSuffix="k"
      />
      <Text tone="tertiary" size="small">
        Midpoint cost (net of seller credits on HVAC) vs midpoint projected
        sale-value add at resale (or capitalized rental income for the
        2-family conversion). Excludes any income earned while held.
      </Text>

      <H3>Detailed renovation budget &amp; ROI (post-inspection)</H3>
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
          "info",
          "info",
          "info",
          "info",
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
        ]}
        rows={[
          [
            "1",
            "Restore legal 2-family (add upstairs kitchen, fire-rated unit door, separate Con Ed meters using existing per-floor sub-panels, gas/water sub-shutoffs, smoke/CO, separate locks)",
            "$30–55k",
            "$530–715k",
            "~14×",
            "Reduced from prior $35–60k: the inspection confirmed two 60A sub-panels are already one-per-floor, so electrical sub-metering is mostly a meter-pan + utility-coordination job, not a re-wire. Reuse the existing indirect HW tank from the boiler — don't split DHW.",
          ],
          [
            "2",
            "Cellar paperwork de-risk: back-file ACP for finishes / electrical / mini-split; confirm no second cookline or bedroom claim",
            "$3–10k",
            "$15–40k",
            "~4×",
            "Risk that the finish work, recessed lighting, and mini-split install were ever permitted. A small belated filing usually legalizes. Inspector noted basement finishes prevented assessment of foundation / beams.",
          ],
          [
            "3",
            "Combine the 80 sf bedroom with adjacent 16×9 to make a true primary suite (or keep '3-bed' label for resale)",
            "$5–15k",
            "$20–35k",
            "~2.5×",
            "Two of three bedrooms are <100 sf. A true primary scans better in listings. Decide based on hold-vs-sell.",
          ],
          [
            "4",
            "Cosmetic refresh + electrical-safety punch list: repaint purple/red rooms neutral, refinish ground-floor floor, light fixtures, smart thermostats, fix sub-panel covers, label all 3 panels, replace failed bath fixture & loud bath fan, cooktop-igniter",
            "$6–15k",
            "$25–50k",
            "~3.5×",
            "Most of the inspection's small punch list rolls into one pass with a licensed electrician + handyman. Do right before sale, not at purchase — except panel-cover safety items, which are immediate.",
          ],
          [
            "5",
            "HVAC: replace 2 failed Fujitsu mini-splits (main + basement) with modern high-SEER units (after applying seller credit)",
            "$2–7k net",
            "$20–35k",
            "~5×",
            "Gross cost $12–25k. Negotiate $10–18k seller credit based on inspection report; pay the difference out of pocket. Without the credit, ROI is closer to 1.5×. The upstairs unit can run another 5–6 yrs.",
          ],
          [
            "6",
            "Add a 3rd bathroom upstairs (small en-suite off the largest bedroom or a guest 1/2 bath)",
            "$20–35k",
            "$35–55k",
            "~1.6×",
            "Not strictly required — each unit gets a bath after separation — but raises achievable upper-unit rent ~$300–500/mo. Stack plumbing above existing wet wall.",
          ],
          [
            "7",
            "Roof replacement (Phase 2, yr 2–4): full modified-bitumen / TPO + parapet flashing + add R-49 roof insulation (currently none)",
            "$28–48k",
            "$45–70k",
            "~1.5×",
            "Current roof rated 'fair' but 14–16 yrs old of an 18–20 yr life. Silver coating is a stopgap. Combine with insulation — eligible for utility rebates. Don't defer past yr 4.",
          ],
          [
            "8",
            "Backyard upgrade: composite deck above existing patio, planters, new fence, low-volt lighting",
            "$15–30k",
            "$25–40k",
            "~1.4×",
            "Rear yard is the weakest exterior element. Brooklyn buyers heavily weight outdoor space.",
          ],
          [
            "9",
            "Front entry safety package: tighten/replace front handrails, regrade/replace settled walkway, seal Bilco basement door, rebuild uneven basement stair risers",
            "$4–10k",
            "$8–18k",
            "~1.5×",
            "Required for any tenant occupancy + curb appeal at resale. Some items (stairs, walkway) can be seller punch list pre-closing.",
          ],
          [
            "10",
            "Rear brick repointing, secure cellar egress window, paint exterior trim at rear",
            "$5–12k",
            "$8–18k",
            "~1.4×",
            "Front facade is immaculate. Rear brick shows older mortar.",
          ],
          [
            "11",
            "Sewer lateral camera scope + spot repair if needed (inspector flagged original mixed-material waste lines)",
            "$0.5–15k",
            "Loss-avoidance",
            "—",
            "Camera $400–800 alone. Budget for repair only if scope shows defects. Insurance against $40–80k emergency.",
          ],
          [
            "12",
            "Boiler service contract (NOT replace) + circulator-pump oiling + monitor sump",
            "$0.3–1k / yr",
            "Extends life 5–7 yrs",
            "—",
            "Boiler is 2013 (12–13 yrs of 18–20) — replacing now would waste 5–7 yrs of useful life. Annual service + run another 5 yrs.",
          ],
        ]}
      />

      <H3>Recommended phased budget (post-inspection)</H3>
      <Grid columns={3} gap={16}>
        <Card>
          <CardHeader>Phase 0 — pre-closing (seller's side)</CardHeader>
          <CardBody>
            <Stack gap={4}>
              <Text>
                Goal: convert the inspection report into purchase-price
                concessions. None of this comes out of your construction
                budget.
              </Text>
              <Text>· Seller credit: 2 failed mini-splits</Text>
              <Text>· Seller fixes: sub-panel covers + labeling</Text>
              <Text>· Seller fixes: handrails, walkway, Bilco gap</Text>
              <Text>· Seller fixes: bath light, bath fan, cooktop igniter</Text>
              <Text>· Seller resolves open 2003 A2 permit (or escrow)</Text>
              <Text weight="semibold">Target credit / fixes: $14–28k</Text>
              <Text tone="secondary">
                Anchor: each inspector-flagged item supports either a punch-list
                fix-before-closing or a dollar credit. Don't sign off the
                contingency without it.
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Phase 1 — within 6 months of closing</CardHeader>
          <CardBody>
            <Stack gap={4}>
              <Text>
                Goal: lock in rental cash flow + de-risk legal exposure.
              </Text>
              <Text>· Restore legal 2-family separation</Text>
              <Text>· Cellar paperwork de-risk (back-file finishes)</Text>
              <Text>· Replace 2 failed mini-splits (net of credit)</Text>
              <Text>· Add upstairs 3rd bathroom (if renting upper)</Text>
              <Text>· Pre-closing sewer scope; service contract on boiler</Text>
              <Text weight="semibold">Budget: $55–115k</Text>
              <Text tone="secondary">
                Expected outcome: $36–48k/yr gross rent on the non-owner unit,
                ~$500–700k added equity at refinance / resale, cellar
                liability removed.
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Phase 2 — years 2–4</CardHeader>
          <CardBody>
            <Stack gap={4}>
              <Text>Goal: roof + incremental resale lift.</Text>
              <Text>· Roof replacement + add R-49 roof insulation</Text>
              <Text>· Backyard: composite deck, fence, lighting</Text>
              <Text>· Combine 80 sf bedroom into a primary suite</Text>
              <Text>· Cosmetic refresh between rental turns</Text>
              <Text>· Rear brick repointing</Text>
              <Text weight="semibold">Budget: $60–125k</Text>
              <Text tone="secondary">
                Expected outcome: $80–140k of additional resale lift +
                $1.5–3k/yr operating cost reduction from new insulation +
                heat-pump efficiency.
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Grid>

      <H3>Where the Phase 1 + 2 dollars go (post-inspection)</H3>
      <Grid columns={2} gap={16}>
        <PieChart
          donut
          data={[
            { label: "2-family separation", value: 43, tone: "success" },
            { label: "Roof + insulation (Phase 2)", value: 35, tone: "warning" },
            { label: "Add 3rd bath upstairs", value: 28, tone: "info" },
            { label: "Backyard / deck", value: 22 },
            { label: "Rear brick + sewer", value: 12 },
            { label: "Cosmetic + electrical safety", value: 10 },
            { label: "Combine bedroom", value: 10 },
            { label: "Cellar paperwork", value: 7 },
            { label: "HVAC (net of seller credit)", value: 6, tone: "danger" },
            { label: "Front entry safety", value: 6 },
          ]}
          size={240}
        />
        <Stack gap={6}>
          <Text weight="semibold">Total Phase 1 + 2 budget: $115–240k</Text>
          <Text tone="secondary">
            Up from the prior $100–190k post-photo estimate. The increase is{" "}
            <Text weight="semibold">entirely</Text> the new roof + insulation
            line (Phase 2) plus the net HVAC cost. Phase 1 alone is actually
            $10–10k lighter than before because the boiler / HW retirement is
            no longer needed and the 2-family separation got cheaper.
          </Text>
          <Text>
            <Text weight="semibold">Projected post-renovation value:</Text>{" "}
            $1.85–2.10M (vs $1.275M purchase) once re-listed as a fully legal,
            unit-separated 2-family with a new roof.
          </Text>
          <Text>
            <Text weight="semibold">Cash-on-cash from rental:</Text> $25–34k
            net/yr house-hacking from the owner&apos;s floor.
          </Text>
          <Text>
            <Text weight="semibold">Holding cost reduction:</Text> $1.5–3k/yr
            from new mini-splits + roof insulation. The boiler + HW retire
            play is OFF the table — both units have 5+ yrs of useful life.
          </Text>
          <Text>
            <Text weight="semibold">Inspection-driven cost net to buyer:</Text>{" "}
            roughly <Text weight="semibold">flat</Text> on Phase 1 (lower
            separation cost offsets HVAC net) and{" "}
            <Text weight="semibold">+$30–45k</Text> on Phase 2 (new roof) —
            but Phase 2 roof was always a 'when' not 'if', and now it has a
            firm date.
          </Text>
        </Stack>
      </Grid>

      <H3>Photo-by-photo findings &amp; actions</H3>
      <Table
        headers={["Photo / area", "What's actually there", "Implication / action"]}
        rowTone={["warning", undefined, undefined, undefined, undefined, undefined, undefined, undefined, "warning", undefined]}
        rows={[
          [
            "Cellar (rec room + studio)",
            "Recessed lighting, LVP flooring, sound-treated music studio, pool table, gym, mini-split (FAILED at inspection — see HVAC findings). Fully finished. Inspector noted finishes prevented full assessment of foundation walls / beams / slab.",
            "Moderate risk. Remaining concern is whether finish work (electrical, partitions, recessed lighting, mini-split install) was permitted. Cheap belated ACP filing if not. Mini-split must be replaced or repaired with credit.",
          ],
          [
            "Mechanical room (corrected per inspection)",
            "Weil McLain gas boiler (MFG 02/2013, 12–13 yrs, fair). ONE 50-gal Burnham indirect HW tank (MFG 05/2019, 6–7 yrs, fair) heated by the boiler — not two separate heaters as the photo first suggested. Copper repipe visible. Some ceiling water-staining above mech. Washer/dryer present.",
            "Major correction: don't retire the boiler — it has 5–7 yrs of useful life left. Don't replace the HW tank — it's 2019. Service contract only ($300–500/yr) and patch the ceiling leak source. Saves $5–10k vs the prior plan.",
          ],
          [
            "Kitchen (ground floor)",
            "Gray textured cabinets, quartz counters w/ LED accent, brick backsplash, gas cooktop + wall oven, range hood, dishwasher, full-size fridge w/ ice. Slate-tile floor.",
            "Recently renovated. DO NOT touch — protect the investment. The brick backsplash and hood are the best photographed feature of the listing.",
          ],
          [
            "Master bath (upper floor)",
            "Slate large-format tile shower, frameless glass enclosure, rain head + handheld, pebble shower floor, floating walnut vanity, wood-framed mirror, modern sconces.",
            "Premium finish. Use as the look-and-feel template if you add a small kitchen upstairs for unit-2 separation.",
          ],
          [
            "Upper family room",
            "Parquet hardwood, 2 skylights visible, high ceiling, mini-split AC, mid-century pendant, French doors to office/bedroom.",
            "Best candidate location for a unit-2 kitchenette during 2-family separation. Stack plumbing above existing upstairs bath. Protect skylight flashing.",
          ],
          [
            "Lounge / living rooms",
            "Lilac/purple paint, refinished hardwood, French doors to kitchen, modern pendant, original baseboards.",
            "Repaint in neutral ($1–2k) before any resale photo set. Floors are already in great shape.",
          ],
          [
            "Bedrooms",
            "Hardwood, mini-split AC, smaller-than-typical (one is 80 sf — NYC legal minimum), good light from south-facing windows.",
            "Either combine the 80 sf room with the adjacent 16x9 to make a real primary suite ($5–15k) or keep '3-bed' marketing. Decide based on whether you're keeping or selling.",
          ],
          [
            "Front facade",
            "Immaculate. Recent pointing, original cornice and brownstone window trim, planter boxes, gas-lantern style sconce, new white door w/ transom, intact iron fence and stoop.",
            "No work needed. This is the listing photo — protect it.",
          ],
          [
            "Rear elevation + yard",
            "Red brick rear wall with older mortar, security bars on rear window, mini-split condenser visible, small gravel/grass yard with utility-grade wood fence, weeds.",
            "Rear brick needs repointing ($5–10k). Yard is the weakest exterior element — composite deck + fence + planters ($15–30k) is high-leverage for resale photos.",
          ],
          [
            "Floor plan (Sotheby's)",
            "Confirms 2 floors above grade + basement; ground floor has its own kitchen + small bath; upper floor has 3 bedrooms (one is 80 sf), bath, family room; basement is 38'4 x 15' + 2 utility rooms.",
            "Plan is well-suited to 2 floor-through units. The cellar's 575 sf of finished space is NOT counted in legal residential area today, and shouldn't be marketed that way.",
          ],
        ]}
      />

      <Callout
        tone="info"
        title="Pricing methodology and caveats (updated with inspection data)"
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
            · Roof line is new in this version: inspection clocks the
            existing rolled-rubber roof at 14–16 yrs of an 18–20 yr design
            life. Plan, don't panic — but don't defer past yr 4.
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
          2. <Text weight="semibold">(New from inspection)</Text> Disclose
          the source of the ceiling water-staining above the mechanical room
          and confirm whether any plumbing leak has been repaired.
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
