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
        <Stat value="2" label="ECB violations (both dismissed)" />
        <Stat value="2" label="DOB violations (both dismissed)" />
        <Stat value="IBZ" label="In Industrial Business Zone" tone="info" />
      </Grid>

      <Callout
        tone="danger"
        title="Top three things to resolve before you remove the inspection contingency"
      >
        <Stack gap={6}>
          <Text>
            <Text weight="semibold">1. No Certificate of Occupancy on file.</Text>{" "}
            For a pre-1938 building this is common, but you must obtain a Letter
            of No Objection (LNO) from DOB confirming legal use as a 2-family
            dwelling. Without it, the seller cannot prove the legal occupancy
            you're paying for, and your lender or title insurer may refuse to
            close.
          </Text>
          <Text>
            <Text weight="semibold">
              2. Job #301532535 (A2, 2003) is &quot;PERMIT-PARTIAL&quot; — never
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
              3. Two prior &quot;work without permit&quot; violations.
            </Text>{" "}
            Both ECB and DOB violations from 2001 and 2003 were ultimately
            dismissed, but the pattern suggests historic unpermitted work.
            Cross-check what's actually built today against the 2003 plans and
            ask the inspector to flag anything that looks newer than the
            permitted scope (CEL, 1st, 2nd floors).
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
            "Age, fuel type, last inspection. If converted from oil, ask for proof of underground oil tank removal/abandonment with sworn statement; orphan tanks are a major liability.",
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
            "Oil tank / soil",
            "If ever oil-heated, verify tank removal documentation. Sunset Park has industrial history nearby; review NYS DEC Environmental Site Remediation map for E-designations or spills on the block.",
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
        brownstone window trim · ~$580 / sf inclusive of basement. Cellar bar
        is aesthetic only (no plumbing).
      </Text>

      <Divider />

      <H2>Photo &amp; floor-plan analysis</H2>
      <Callout
        tone="warning"
        title="Property is turn-key, not a fixer — the value play is re-positioning, not renovation"
      >
        <Text>
          The owner-provided photos show this is essentially a finished home:
          updated kitchen, fully tiled modern bathrooms, refinished hardwood,
          mini-split heat pumps in every zone, and a heavily built-out basement
          with music studio, bar, pool table, gym, and recessed lighting.
          Several items I previously priced as &quot;renovate&quot; are{" "}
          <Text weight="semibold">already done</Text> — re-prioritized below.
          The dominant remaining value lever is still restoring the legal
          2-family, but the path is now <Text weight="semibold">cheaper</Text>{" "}
          because the building systems are already split-ready.
        </Text>
      </Callout>

      <H3>What changed after the photo review</H3>
      <Table
        headers={["Item", "Earlier assumption", "Now confirmed from photos", "Impact"]}
        rowTone={[undefined, "success", "success", "warning", "warning", undefined, undefined, undefined]}
        rows={[
          [
            "Total bathroom count",
            "Possibly need to add a 3rd bath",
            "Two baths confirmed (small one off ground-floor dining; primary upstairs)",
            "Each unit will have its own bath after re-separation. Adding a 3rd upstairs is a luxury upgrade, not a necessity.",
          ],
          [
            "Heat pump / HVAC modernization",
            "$15–30k upgrade",
            "Mini-splits visible in kitchen, upper family room, master bed, basement, rear wall",
            "Remove from major budget. ~$3–5k touch-ups only.",
          ],
          [
            "Facade repointing + stoop refresh",
            "$10–25k",
            "Front facade is immaculate — recent pointing, original cornice, brownstone lintels, gas lantern",
            "Defer indefinitely. Rear brick may still need $5–10k.",
          ],
          [
            "Cellar legal status",
            "Possible $150–300k upside if legalizable",
            "Cellar is fully finished (recessed lights, LVP, music studio, pool table, gym, mini-split). Bar is aesthetic only — no plumbing, no kitchen.",
            "Risk is moderate — no smoking gun for illegal apartment. Concern is whether finish work + electrical + mini-split were permitted. Likely a small back-filing exposure.",
          ],
          [
            "Boiler / mechanicals",
            "Standard replace",
            "Boiler appears 20+ yrs old; 2 water heaters in mechanical room (suggests prior 2-unit hot-water split); some ceiling water damage",
            "Plan for boiler retire + heat-pump water heater. $5–10k.",
          ],
          [
            "Kitchen condition",
            "Recently renovated",
            "Confirmed: gray textured cabinets, quartz counters, brick backsplash, gas range + wall oven, dishwasher, full-size fridge w/ ice. Don't touch.",
            "Save the $40–80k previously hinted at.",
          ],
          [
            "Master bath condition",
            "Unknown",
            "High-end: slate large-format tile shower, glass enclosure, rain head, pebble floor, floating walnut vanity. Premium finish.",
            "Save bathroom budget. Use the look as the template for any unit-2 bath.",
          ],
          [
            "Tiny bedroom (11'5\" x 7' = 80 sf)",
            "Not flagged",
            "Floor plan confirms — right at NYC legal minimum. Marketed as 3-bed but two of the three bedrooms are <100 sf.",
            "Combine with adjacent 16x9 bedroom to make true primary suite OR keep for resale '3-bed' label.",
          ],
        ]}
      />

      <Divider />

      <H2>Value-improvement priorities (revised)</H2>
      <Text tone="secondary">
        Ranked by projected return on dollars invested. Cost ranges are NYC
        retail (licensed GC, permitted work, Brooklyn row-house pricing, mid
        2026). Value impact uses comparable Sunset Park / Greenwood / Park
        Slope sales and current 4.5–5% rental cap rates for income items.
      </Text>

      <Callout
        tone="success"
        title="The single highest-ROI move: restore the legal 2-family"
      >
        <Text>
          Two structural facts from the photos make the separation easier than
          assumed: (a) the mechanical room already has{" "}
          <Text weight="semibold">two water heaters</Text>, suggesting the
          building was previously split unit-by-unit; (b) the ground floor
          already has its own kitchen, full bath, and a separate front entry.
          The remaining work is mostly upstairs: add a small kitchen in the
          family-room area, add a fire-rated unit-entry door at the top of the
          stair, and sub-meter electric. Sunset Park 1-2 BR floor-throughs rent
          $3,000–$4,000/mo, ~$25–34k net after expenses. At a 4.75% cap that&apos;s{" "}
          <Text weight="semibold">$530k–$715k of value</Text> on a revised{" "}
          <Text weight="semibold">$35–60k</Text> separation budget. ROI ~10–18×.
        </Text>
      </Callout>

      <H3>Projected value impact vs cost (priority initiatives, revised)</H3>
      <BarChart
        categories={[
          "Re-separate 2-family",
          "Cellar de-risk (de-finish)",
          "Add 3rd bath upstairs",
          "Cosmetic refresh",
          "Boiler retire + HP water",
          "Backyard / deck",
          "Combine small bedroom",
          "Rear brick + sewer",
        ]}
        series={[
          {
            name: "Cost (midpoint, $k)",
            data: [48, 7, 28, 8, 8, 22, 10, 18],
            tone: "warning",
          },
          {
            name: "Projected value add ($k)",
            data: [620, 27, 45, 30, 15, 30, 25, 12],
            tone: "success",
          },
        ]}
        height={260}
        valueSuffix="k"
      />
      <Text tone="tertiary" size="small">
        Midpoint cost vs midpoint projected sale-value add at resale (or
        capitalized rental income for the 2-family conversion). Excludes any
        income earned while held.
      </Text>

      <H3>Detailed renovation budget &amp; ROI (revised after photo review)</H3>
      <Table
        headers={[
          "#",
          "Initiative",
          "Cost range",
          "Value add",
          "ROI",
          "Notes",
        ]}
        columnAlign={["right", "left", "right", "right", "right", "left"]}
        rowTone={[
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
        ]}
        rows={[
          [
            "1",
            "Restore legal 2-family (add upstairs kitchen, fire-rated unit door, sub-meter electric, smoke/CO, separate locks; reuse existing 2 water heaters)",
            "$35–60k",
            "$530–715k",
            "~12x",
            "Cheaper than first quote: existing 2 water heaters and ground-floor kitchen + bath mean less new infra. Verify DOB hasn't lost the 2-family use status when units were combined.",
          ],
          [
            "2",
            "Cellar paperwork de-risk: back-file ACP for finishes / electrical / mini-split if needed; confirm no second cookline or bedroom claim",
            "$3–10k",
            "$15–40k",
            "~4x",
            "Risk that the finish work, recessed lighting, and mini-split installation were ever permitted. A small belated filing is usually enough to legalize. Confirm during inspection.",
          ],
          [
            "3",
            "Add a 3rd bathroom upstairs (en-suite half or full off the largest bedroom; or a guest bath off the family room)",
            "$20–35k",
            "$35–55k",
            "~1.6x",
            "Not strictly required — each unit will have 1 bath after re-separation — but a 3-bed/1-bath upper unit is a soft rental ceiling. Adding a 2nd upstairs bath raises achievable rent ~$300–500/mo. Stack plumbing above existing wet wall.",
          ],
          [
            "4",
            "Cosmetic refresh: repaint purple/red rooms in neutral, refinish ground-floor hardwood, light fixtures, hardware, smart thermostats",
            "$5–12k",
            "$20–45k",
            "~3.5x",
            "Floors and finishes are already good — this is a $0.20-on-the-dollar lift. Do right before sale, not at purchase.",
          ],
          [
            "5",
            "Boiler retire + heat-pump water heater + mechanical-room cleanup, patch ceiling water damage",
            "$5–12k",
            "$10–20k",
            "~1.7x",
            "Mini-splits cover space heating already. Old boiler likely only doing DHW — replace with hybrid heat-pump water heater (rebate eligible), retire boiler, free up floor area in mech room.",
          ],
          [
            "6",
            "Backyard upgrade: composite deck above existing patio, planters, new fence, low-volt lighting",
            "$15–30k",
            "$25–40k",
            "~1.4x",
            "Current rear yard is the weakest exterior element (raw fence, gravel, weeds). Brooklyn buyers heavily weight outdoor space.",
          ],
          [
            "7",
            "Combine the 80 sq ft bedroom with adjacent 16x9 bedroom for a true primary suite",
            "$5–15k",
            "$20–35k",
            "~2.5x",
            "Two of the three bedrooms are <100 sf. A true primary suite scans better in listings even if you trade '3-bed' for '2-bed + flex'. Or keep current layout and market as 3-bed.",
          ],
          [
            "8",
            "Rear brick repointing, secure cellar egress window, paint exterior trim at rear",
            "$5–12k",
            "$5–15k",
            "~1.2x",
            "Front facade is immaculate. Rear brick shows older mortar joints and unfinished pointing.",
          ],
          [
            "9",
            "Sewer lateral scope + spot repair if needed",
            "$0.5–15k",
            "Negative-avoidance",
            "—",
            "Insurance against $40–80k emergency. Scope is $400–800 alone; budget for repair only if camera shows defects.",
          ],
          [
            "10",
            "Window restoration / storm windows (optional)",
            "$8–18k",
            "$5–15k",
            "~0.7x",
            "Photos show original wood double-hungs in front, recently painted black. Restore + storms is cheaper than replace and adds more historic value.",
          ],
        ]}
      />

      <H3>Recommended phased budget</H3>
      <Grid columns={2} gap={16}>
        <Card>
          <CardHeader>Phase 1 — within 6 months of closing</CardHeader>
          <CardBody>
            <Stack gap={4}>
              <Text>
                Goal: lock in the rental cash flow + de-risk legal exposure.
              </Text>
              <Text>· Restore legal 2-family separation</Text>
              <Text>· Cellar paperwork de-risk (back-file finishes if needed)</Text>
              <Text>· Add upstairs 3rd bathroom (if renting upper)</Text>
              <Text>· Boiler retire + heat-pump water heater</Text>
              <Text>· Sewer scope; sub-meter electric if not done</Text>
              <Text weight="semibold">Budget: $65–125k</Text>
              <Text tone="secondary">
                Expected outcome: $36–48k/yr gross rent on the non-owner unit,
                ~$500–700k of added equity at refinance / resale, and the
                cellar liability removed from any future inspection.
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>Phase 2 — years 1–3</CardHeader>
          <CardBody>
            <Stack gap={4}>
              <Text>Goal: incremental resale lift, raise rent ceiling.</Text>
              <Text>· Backyard: composite deck, fence, lighting</Text>
              <Text>· Combine the 80 sf bedroom into a primary suite</Text>
              <Text>· Cosmetic refresh between rental turns</Text>
              <Text>· Rear brick repointing</Text>
              <Text weight="semibold">Budget: $30–70k</Text>
              <Text tone="secondary">
                Expected outcome: $50–100k of additional resale lift, premium
                pricing on a re-listing as a fully legal 2-family.
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Grid>

      <H3>Where the Phase 1 + 2 dollars go (revised)</H3>
      <Grid columns={2} gap={16}>
        <PieChart
          donut
          data={[
            { label: "2-family separation", value: 48, tone: "success" },
            { label: "Add 3rd bath upstairs", value: 28, tone: "info" },
            { label: "Backyard / deck", value: 22 },
            { label: "Combine bedroom", value: 10 },
            { label: "Cosmetic refresh", value: 8 },
            { label: "Boiler + HP water", value: 8, tone: "warning" },
            { label: "Cellar paperwork", value: 7 },
            { label: "Rear brick + sewer", value: 18 },
          ]}
          size={240}
        />
        <Stack gap={6}>
          <Text weight="semibold">Total Phase 1 + 2 budget: $100–190k</Text>
          <Text tone="secondary">
            Down from the $140–235k pre-photo estimate. The property is
            substantially more turn-key than the listing language suggested —
            but the 3rd bathroom and 2-family separation are still the two
            biggest line items.
          </Text>
          <Text>
            <Text weight="semibold">Projected post-renovation value:</Text>{" "}
            $1.8–2.0M (vs $1.275M purchase) once re-listed as a fully legal,
            unit-separated 2-family.
          </Text>
          <Text>
            <Text weight="semibold">Cash-on-cash from rental:</Text> $25–34k
            net/yr house-hacking from the owner&apos;s floor.
          </Text>
          <Text>
            <Text weight="semibold">Holding cost reduction:</Text> $1.5–3k/yr
            from heat-pump water heater + boiler retire.
          </Text>
        </Stack>
      </Grid>

      <H3>Photo-by-photo findings &amp; actions</H3>
      <Table
        headers={["Photo / area", "What's actually there", "Implication / action"]}
        rowTone={["warning", undefined, undefined, undefined, undefined, undefined, undefined, undefined, "warning", undefined]}
        rows={[
          [
            "Cellar (rec + studio + cosmetic bar)",
            "Recessed lighting, LVP flooring, sound-treated music studio, pool table, gym, mini-split, plus a cosmetic-only bar (no plumbing). Fully finished.",
            "Moderate risk. No plumbed bar means no illegal-apartment evidence. Remaining concern is whether finish work (electrical, partitions, recessed lighting, mini-split install) was permitted. Cheap belated filing if not.",
          ],
          [
            "Mechanical room",
            "Old beige boiler (likely 1990s), TWO water heaters (1 white tank, 1 blue smaller tank), heavy copper repipe, ceiling water-damaged above mech, washer/dryer.",
            "Boiler retire + heat-pump WH = $5–10k and 30–60% opex cut. Two water heaters suggests the building was previously split unit-by-unit — confirms the 2-family separation is cheap to restore. Patch ceiling leak source.",
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
            · Numbers assume the Tier 1 due-diligence items above (open permit,
            no C of O, prior WWP violations) are cured before any work begins;
            otherwise expect 20–40% cost overrun from legalization back-charges.
          </Text>
          <Text>
            · Cellar finishing risk is moderate, not catastrophic. With no
            plumbed bar / kitchen there&apos;s no illegal-apartment exposure.
            Worst case is a belated ACP filing for finishes / electrical /
            mini-split — typically $3–10k. Still negotiate seller responsibility
            into the contract.
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

      <H2>Questions to put to the seller in writing</H2>
      <Stack gap={4}>
        <Text>
          1. Provide the DOB sign-off and final inspection paperwork for Job
          301532535. If unavailable, agree in the contract to close out the
          permit and bear the cost.
        </Text>
        <Text>
          2. Confirm in writing that no work has been performed on the building
          since the 2003 A2 permit other than ordinary repairs not requiring a
          permit; list any exceptions.
        </Text>
        <Text>
          3. Provide a sworn statement regarding any underground or aboveground
          oil tank: presence, location, removal date, NYSDEC paperwork.
        </Text>
        <Text>
          4. Provide the lead paint disclosure (federal Title X) and any prior
          XRF or risk assessment.
        </Text>
        <Text>
          5. Confirm in writing that the building has only two dwelling units
          and the cellar is not used or rented as a separate dwelling.
        </Text>
        <Text>
          6. Provide last three years of water/sewer bills and Con Ed bills
          (electric and gas) per unit — useful for inspector cross-checks and
          to spot a hidden third meter.
        </Text>
        <Text>
          7. Disclose any flooding, sewer back-up, mold remediation, or
          structural repair within the last 10 years.
        </Text>
        <Text>
          8. Provide proof of any homeowner&apos;s insurance claims filed at
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
