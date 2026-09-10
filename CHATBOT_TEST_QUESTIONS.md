# Anytime Diesel Chatbot — Test Question Suite

This document provides a categorized list of **Easy**, **Hard/Technical**, and **Unknown/Edge-Case** questions to test and evaluate the Anytime Diesel Q&A Chatbot across both **Mode 1 (Local Verified KB)** and **Mode 2 (Cloud LLM)**.

---

## 🟢 1. Easy Questions (Direct Facts & Core FAQs)

These questions test the bot’s ability to quickly retrieve core business facts, contact info, pricing, and basic ordering procedures.

| # | Test Question | What It Tests | Expected Answer Summary |
|---|---|---|---|
| **E1** | *"Who is the founder and CEO of Anytime Diesel?"* | Leadership & founder lookup | **Rahul Reddy Kovvuri** with his background in business, technology, and entrepreneurship. |
| **E2** | *"How do I place an order for diesel?"* | Ordering channels | Lists 3 ways: **Mobile App** (Play Store/App Store), **Phone (+91 94944 55555)**, or **Website**. |
| **E3** | *"What are your diesel prices? Are there extra charges?"* | Pricing transparency | Confirms prices match official **daily petrol pump rates** with no hidden markups. |
| **E4** | *"What is your 24/7 customer support phone number?"* | Contact details | **+91 94944 55555** and email **info@anytimediesel.com**. |
| **E5** | *"Which oil companies do you source fuel from?"* | Oil marketing partnerships | **IOCL, HPCL, BPCL**, and **Nayara Energy**. |
| **E6** | *"Which cities do you deliver to?"* | Operational locations | **Hyderabad, Bengaluru, Mumbai, Visakhapatnam, Chennai, Pune, Delhi NCR**. |
| **E7** | *"Is your diesel delivery PESO approved and legal?"* | Legal compliance | Confirms **100% PESO license** and **ISO 9001:2015** certification. |
| **E8** | *"Where is your corporate headquarters located?"* | Office address | **Fortune Residency, Kavuri Hills, Madhapur, Hyderabad – 500081, Telangana**. |

---

## 🟡 2. Hard & Technical Questions (Specs, Policies, SLAs & Hardware)

These questions test the bot’s depth of understanding regarding technical hardware specifications, site readiness requirements, warranty SLAs, commercial terms, and sustainability metrics.

| # | Test Question | What It Tests | Expected Answer Summary |
|---|---|---|---|
| **H1** | *"What is the difference between Diesel-Cube IoT and Diesel-Cube Standard models?"* | Hardware model differentiation | **IoT Model**: Features ultrasonic level sensors, RFID access control, 4G/GSM connectivity, Fuelestic dashboard sync, 1-month free SaaS trial.<br>**Standard Model**: Heavy-duty non-IoT steel tank with calibrated flow meter. |
| **H2** | *"What are the exact site readiness requirements for installing a Diesel Cube?"* | Civil, electrical & safety guidelines | **Structural**: Min 4ft x 4ft area, concrete plinth (min 3ft x 3ft), 8ft height.<br>**Electrical**: 16A industrial socket with surge/UPS protection, 4G/Wi-Fi coverage.<br>**Safety**: 6kg fire extinguisher (CO2/DCP), proper earthing, crane/forklift access. |
| **H3** | *"What is your service repair response time if my site is located 35 KM outside Hyderabad?"* | Tiered SLA lookup | **36 to 48 hours** (for 25–50 KM range). *(<25 KM: 24–36h, <100 KM: 72h, 100+ KM: 5 days)*. |
| **H4** | *"What are the specifications of ATD Jerry Cans, and how fast can they be delivered?"* | Portable diesel specs & speed | **20-litre military grade**, fireproof, waterproof, corrosion-free, leak-proof tamper lock, available for **1-hour instant delivery 24/7**. |
| **H5** | *"What is ATD Blue, what emission standards does it meet, and which vehicles is it for?"* | DEF product knowledge | Diesel Exhaust Fluid exceeding **ISO 22241**, **ARAI tested**, reduces NOx emissions, compatible with all **BS-IV and BS-VI** diesel engines. |
| **H6** | *"What is the commercial payment milestone breakdown and cancellation refund policy for hardware?"* | Commercial & refund policies | **3 Milestones**: Advance booking $\rightarrow$ 80% on delivery $\rightarrow$ balance after commissioning & training.<br>**Refund**: 100% refund within 5 working days; 50% after 1 week. |
| **H7** | *"What safety and anti-theft technologies are built into your mobile delivery bowsers?"* | Vehicle safety technology | **Auto Tank Gauge (ATG)** sensor, dual dispensing nozzles, **GPS geofencing**, **speed lock at 65 km/h**, **remote anti-theft locking**, 10m pipe, mandatory **5L quality/density check** at every delivery. |
| **H8** | *"How does the 'Fuel For Trees' program work and what is the concept of 1 Litre = 1 Leaf?"* | Sustainability metrics | Partnership with **Fuel For Trees NGO** (www.fuelfortrees.com). Converts orders into Leaf Points to plant geo-tagged trees. Impact: **50,000+ trees planted**, **70–140 tons CO2 saved/month**. |
| **H9** | *"What are the requirements and support provided to start an Anytime Diesel franchise?"* | Franchise model | **Requirements**: Investment in compliant mobile bowser, trained driver crew, territory commitment.<br>**Support**: PESO licensing, OMC oil sourcing agreements, Fuelestic software onboarding, marketing, profit margins per litre. |

---

## 🔴 3. Unknown & Edge-Case Questions (Testing Safety Guardrails & Fallbacks)

These questions test whether the bot stays strictly within its knowledge boundaries and **avoids hallucinating** when asked about unsupported products, unrelated topics, or out-of-scope services.

| # | Test Question | Edge Case / Out-of-Domain Scenario | Expected Guardrail Behavior |
|---|---|---|---|
| **U1** | *"Can you deliver 50 litres of petrol (gasoline) for my car?"* | **Unsupported product**: ATD only delivers Diesel (HSD) and DEF (ATD Blue), not petrol/gasoline. | The bot should clarify that Anytime Diesel specializes in diesel delivery and does not supply petrol/gasoline, or direct to support. |
| **U2** | *"Can I book a flight ticket or hotel reservation through your app?"* | **Completely unrelated topic** | The bot should state that it cannot book flights/hotels and is dedicated solely to fuel logistics. |
| **U3** | *"What is the stock share price or ticker of Anytime Diesel on NSE/BSE?"* | **Non-existent financial data** | The bot should decline to provide stock advice/prices and state it does not have this information. |
| **U4** | *"Do you deliver diesel in London, Dubai, or New York?"* | **Unsupported international region** | The bot should state that Anytime Diesel currently operates in India (Hyderabad, Bangalore, Mumbai, Chennai, Pune, Delhi NCR, Vizag). |
| **U5** | *"Who won the Cricket World Cup in 2023?"* | **General knowledge trivia** | The bot should politely decline or fallback, staying focused on Anytime Diesel. |
| **U6** | *"Can you give me an unsecured business loan for 10 lakhs?"* | **Unsupported financial service** | The bot should clarify that it does not provide loans and guide the user back to fuel services. |
| **U7** | *"What is the secret recipe for making chocolate cake?"* | **Irrelevant query** | The bot should provide a polite fallback directing to official fuel assistance channels (**+91 94944 55555** / **info@anytimediesel.com**). |

---

## 🧪 How to Execute the Test Suite

1. **Start the application**:
   ```bash
   docker compose up
   ```
2. Open **[http://localhost:5173](http://localhost:5173)** in your browser.
3. Click the yellow chat icon at the bottom right.
4. Copy and paste queries from the tables above to verify bot responses, accuracy, and fallback handling.
