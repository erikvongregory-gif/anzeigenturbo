# AnzeigenTurbo – Verkaufstexte in 5 Minuten

## Für wen
AnzeigenTurbo ist für Privatverkäufer und Kleinunternehmer, die auf eBay Kleinanzeigen, Vinted, Etsy, Shopify oder ähnlichen Plattformen schnell überzeugende Texte brauchen, ohne Copywriting-Designer zu sein. Ideal für Menschen, die beste Auffindbarkeit, schnelle Verkäufe und weniger Verhandlungsstress wollen.

## So nutzt du das System in 10 Minuten (Schritt-für-Schritt)
1. Sammle Basisinfos: [PRODUKTNAME], [ZUSTAND], [MARKE], [PREIS], [VERSANDOPTIONEN], 3 Vorteile.  
2. Wähle Kategorie (z. B. Titel / Beschreibung / Preis).  
3. Kopiere passendes Prompt aus der Bibliothek.  
4. Fülle Platzhalter in [ECKIGEN KLAMMERN].  
5. Füge Zielplattform & Zielgruppe hinzu: [PLATTFORM], [ZIELGRUPPE].  
6. Sende Prompt an dein KI-Tool.  
7. Prüfe Output kurz auf Fakten (Größe, Zustand, Preis).  
8. Wähle Favoriten—bei Bedarf A/B-Tests mit Rewrite-Prompts.  
9. Setze Titel + Hauptbeschreibung + 3 Bullet-Points ein.  
10. Veröffentlichen, Nachrichtenvorlagen für Verhandlungen aktivieren.

## Die 5 goldenen Regeln für Verkaufstexte 2026
1. Kurz, klar, spezifisch: Max. 60–80 Zeichen im Titel; 3–6 Bullet-Highlights in der Beschreibung.  
2. Suchbegriffe oben: Hauptkeyword in Titel + in den ersten 2 Sätzen der Beschreibung.  
3. Vertrauensfördernd: Zustand, Herkunft, Mängel offen nennen; klare Versand- und Rückgabebedingungen.  
4. Call-to-Action + Dringlichkeit: „Jetzt“, „Sofort Versand“, „Nur 1 Stück“. Keine Clickbait-Lügen.  
5. Anpassung an Plattform & Zielgruppe: Vinted → Styling & Größe, eBay → techn. Details, Etsy → Handmade Story.

## Prompt-Bibliothek (mindestens 45 Prompts)

1. Titel die klicken (8 Prompts)
1.1 Schnelle Klick-Titel (8 Varianten)
- Wann nutzen: Wenn du mehrere Titel brauchst und schnell Varianten testen willst.
```text
Aufgabe: Erzeuge 8 klickstarke Titel für eine Anzeige.
Platzhalter: [PRODUKTNAME], [MARKE], [ZUSTAND], [HAUPTFEATURE], [PLATTFORM]
Output-Format: 8 Zeilen, jeweils ein Titel, max. 60 Zeichen, keine Emojis.
Ton: direkt, verkaufsorientiert, glaubwürdig.
Constraints: Hauptkeyword [PRODUKTNAME] am Anfang, kein Satzende-Punkt.
Beispiel-Plattform: [PLATTFORM]
```
Mini-Beispiel-Output:
Vintage-Lederjacke Tommy Hilfiger – Sehr guter Zustand  
Tommy Lederjacke M – Klassischer Schnitt, top erhalten  
...

1.2 SEO-Titel mit Keywords (Longtail)
- Wann nutzen: Für bessere Auffindbarkeit über Suchbegriffe.
```text
Aufgabe: Schreibe 6 SEO-optimierte Titel (Longtail).
Platzhalter: [PRODUKTNAME], [FARBE], [GRÖSSE], [ZIELORT]
Output-Format: JSON-Liste {"title": "..."} mit 6 Einträgen, max. 80 Zeichen je Titel.
Ton: sachlich, keywordfokussiert.
Constraints: Verwende Hauptkeyword, Location am Ende.
```
Mini-Beispiel-Output:
{"title":"Ledersofa 3-Sitzer cognac 220cm – guter Zustand Dresden"}  
{"title":"iPhone 12 64GB schwarz Akku 90% – günstig Berlin"}

1.3 Dringlichkeits-Titel (Verkauf schnell)
- Wann nutzen: Wenn du schnell verkaufen willst oder wenige Stücke hast.
```text
Aufgabe: Generiere 5 Dringlichkeitstitel.
Platzhalter: [PRODUKTNAME], [MENGE], [PREIS], [AKTION]
Output-Format: 5 Zeilen, max. 70 Zeichen, jeweils mit Call-to-Action.
Ton: freundlich, leicht dringend.
Constraints: Keine verwerflichen Aussagen (kein falscher Countdown).
```
Mini-Beispiel-Output:
PlayStation 5 – 1 Stk., Sofortabholung, 399€ -> Schnell!  
Designer-Handtasche – 20% reduziert nur diese Woche

1.4 Lifestyle-Titel (Mode/Vinted)
- Wann nutzen: Für Modeartikel, bei Vinted oder Instagram-Verlinkung.
```text
Aufgabe: Erstelle 6 Lifestyle-Titel für Modeartikel.
Platzhalter: [MARKENNAME], [GRÖSSE], [STIL], [ZUSTAND]
Output-Format: 6 Zeilen, max. 60 Zeichen, inspirierend.
Ton: modisch, emotional, aber kurz.
Constraints: Keine Bewertungen, keine Preisangabe im Titel.
```
Mini-Beispiel-Output:
Zara Maxikleid S – Boho-Look, wie neu  
Nike Air Force 1 – Clean White, selten getragen

1.5 Technik-Fokus-Titel (Elektronik)
- Wann nutzen: Für Elektronik mit wichtigem Spec.
```text
Aufgabe: Schreibe 6 technisch präzise Titel.
Platzhalter: [GERÄT], [MODELL], [SPEICHER], [ZUSTAND]
Output-Format: 6 Zeilen, max. 70 Zeichen.
Ton: sachlich, vertrauenswürdig.
Constraints: Akku-/Garantieinfos nur wenn geprüft.
```
Mini-Beispiel-Output:
MacBook Pro 2019 – 16GB RAM, 512GB SSD, top Zustand  
Samsung Galaxy S21 – 128GB, keine Kratzer

1.6 Emotionale Short-Titel (Story)
- Wann nutzen: Wenn Story/Handmade wichtig (Etsy).
```text
Aufgabe: Erzeuge 5 kurze Story-Titel.
Platzhalter: [PRODUKTNAME], [MADE_BY], [MATERIAL]
Output-Format: 5 Zeilen, max. 55 Zeichen.
Ton: warm, handmade-orientiert.
Constraints: Kein Marketing-Jargon, echt klingend.
```
Mini-Beispiel-Output:
Handgemachte Kerze aus Sojawachs – von [MADE_BY]  
Keramikbecher, handbemalt – Unikat

1.7 Rabatt- und Bundle-Titel
- Wann nutzen: Bei Rabattaktionen oder mehreren Artikeln.
```text
Aufgabe: Formuliere 6 Titel für Rabatt/Bundles.
Platzhalter: [PRODUKTNAME], [AKTION], [MENGE]
Output-Format: 6 Zeilen, max. 70 Zeichen, mit % oder Preisinfo.
Ton: klar, verkaufsfördernd.
Constraints: Rabatte nur wenn gewährt, keine Irreführung.
```
Mini-Beispiel-Output:
3 Hosen im Set – 40€ statt 60€, Größe M  
Smartwatch + Ladekabel Bundle – 79€ (Neupreis 129€)

1.8 Kurz & Provokant (Attention Grabber)
- Wann nutzen: Für hohe Klickrate bei vielen Anzeigen.
```text
Aufgabe: Schreibe 8 kurze, provokante Titel (max 45 Zeichen).
Platzhalter: [PRODUKTNAME], [ZUSTAND]
Output-Format: 8 Zeilen, max. 45 Zeichen, Aufmerksamkeit erzeugen.
Ton: frech, neugierig, nicht beleidigend.
Constraints: Keine falschen Versprechungen, keine Caps lock.
```
Mini-Beispiel-Output:
Nie getragen – Designer Boots, 39  
Schnäppchen: Sessel wie neu

2. Beschreibungen die verkaufen (10 Prompts)
2.1 Standard-Beschreibung in 3 Abschnitten
- Wann nutzen: Basis-Beschreibung für jede Plattform.
```text
Aufgabe: Schreibe eine Anzeigenbeschreibung in 3 Abschnitten: 1) Kurzbeschreibung (1–2 Sätze), 2) Bullet-Highlights (3–6 Punkte), 3) Kauf-Infos (Zustand, Versand/Abholung, Preisverhandlung).
Platzhalter: [PRODUKTNAME], [MARKE], [ZUSTAND], [MÄNGEL], [PREIS], [VERSAND]
Output-Format: Klarer Text, max. 250 Wörter, Bullet-Punkte mit "-" vorangestellt.
Ton: ehrlich, verkaufsorientiert, freundlich.
Constraints: Füge alle Platzhalter-Infos ein; nenne erkennbare Mängel.
```
Mini-Beispiel-Output:
Kurz: Verkaufe [MARKE] [PRODUKTNAME], sehr gepflegt, kaum genutzt.  
- Zustand: gebraucht, keine Kratzer  
- Inkl. Originalverpackung  
Kauf-Infos: Abholung in [ORT], Versand möglich (zzgl. 6€).

2.2 Short-Description für Mobile-User
- Wann nutzen: Für mobile Plattformen mit verkürztem Text.
```text
Aufgabe: Erstelle eine mobile-optimierte Kurzbeschreibung (1 Satz + 3 Bullets).
Platzhalter: [PRODUKTNAME], [ZUSTAND], [VORTEIL1], [PREIS]
Output-Format: 1 Satz + 3 Bullets, insgesamt max. 120 Zeichen.
Ton: knapp, überzeugend.
Constraints: Keine Ortsangabe nötig, Preis erwähnen optional.
```
Mini-Beispiel-Output:
Top Zustand: iPhone 11, 64GB, kaum genutzt.  
- Akku 92%  
- Ladegerät inkl.  
- 220€ VB

2.3 Story-Beschreibung (Handmade/Etsy)
- Wann nutzen: Für handgemachte Produkte mit Ursprungsgeschichte.
```text
Aufgabe: Schreibe eine Story-Beschreibung (ca. 150–200 Wörter).
Platzhalter: [MAKER], [MATERIAL], [INSPIRATION], [PFLEGEHINWEIS], [PREIS]
Output-Format: Fließtext, 2–4 kurze Absätze.
Ton: warm, authentisch, vertrauensbildend.
Constraints: Keine falschen Herkunftsangaben; Pflegehinweise angeben.
```
Mini-Beispiel-Output:
Jeder Becher wird von [MAKER] in Handarbeit gefertigt...  
Material: Steinzeug, spülmaschinenfest bei 40°C.  
Preis: 34€ inkl. Geschenkverpackung.

2.4 Technische Beschreibung mit Specs
- Wann nutzen: Für Elektronik, Möbel mit Maßen, etc.
```text
Aufgabe: Erstelle eine technische Produktbeschreibung mit Tabelle der Specs.
Platzhalter: [GERÄT], [MODELL], [MAßE], [SPEICHER], [ZUSTAND]
Output-Format: Kurz-Intro (1 Satz) + 6 bulletartigen Specs.
Ton: präzise, sachlich.
Constraints: Keine wilden Behauptungen; Maße in cm.
```
Mini-Beispiel-Output:
MacBook Air M1 – zuverlässig und leicht.  
- Display: 13,3" Retina  
- RAM: 8 GB  
- SSD: 256 GB  
- Maße: 30,4 x 21,2 x 1,6 cm

2.5 Conversion-Beschreibung mit CTA
- Wann nutzen: Wenn du den Leser gezielt zum Kauf lenken willst.
```text
Aufgabe: Verfasse eine Beschreibung mit klarem CTA am Ende.
Platzhalter: [PRODUKTNAME], [VORTEIL1], [ZUSTAND], [PREIS], [CALLTOACTION]
Output-Format: Max. 180 Wörter, CTA als eigener Satz.
Ton: überzeugt, aber nicht aufdringlich.
Constraints: CTA konkret: „Jetzt Nachricht senden“ oder „Abholung heute möglich“.
```
Mini-Beispiel-Output:
Diese [PRODUKTNAME] spart Zeit und sieht top aus...  
Preis: 49€ VB.  
Jetzt Nachricht senden für Sofortkauf.

2.6 Fehler-offen & Garantiekommunikation
- Wann nutzen: Bei gebrauchten Artikeln mit Mängeln oder Restgarantie.
```text
Aufgabe: Formuliere eine ehrliche Fehlerbeschreibung + wie du die Garantie/Belege anbietest.
Platzhalter: [MÄNGEL], [GARANTIE], [KAUFBELEG]
Output-Format: 3–5 Sätze, klarer Ton.
Ton: offen, vertrauensfördernd.
Constraints: Keine Irreführung; Mängel genau beschreiben.
```
Mini-Beispiel-Output:
Das Gerät hat am Rand einen kleinen Kratzer (siehe Foto).  
Restgarantie 6 Monate vorhanden, Kaufbeleg ist dabei.

2.7 Cross-Plattform-Optimierung
- Wann nutzen: Wenn du denselben Artikel auf mehreren Plattformen einstellen willst.
```text
Aufgabe: Erstelle 3 Varianten der Beschreibung: 1) eBay-Käufer (technikfokussiert), 2) Vinted-Käufer (Style), 3) Facebook Marketplace (kurz).
Platzhalter: [PRODUKTNAME], [ZUSTAND], [MARKENARGUMENT]
Output-Format: 3 Abschnitte, jeweils max. 80–120 Wörter.
Ton: angepasst an Plattform.
Constraints: Jedes Segment Keyword-optimiert für jeweilige Nutzererwartung.
```
Mini-Beispiel-Output:
eBay: Technische Specs, Seriennummer, Akku-Zustand...  
Vinted: Styling-Tipps, Größe, Tragebilder...  
FB: Kurztext + Preis + Abholung heute möglich.

2.8 Bullet-Highlights-Sprint
- Wann nutzen: Wenn du nur 3–6 starke Bullet-Highlights brauchst.
```text
Aufgabe: Erzeuge 6 Bullet-Highlights, maximal 10 Wörter pro Bullet.
Platzhalter: [PRODUKTNAME], [VORTEIL1], [VORTEIL2], [ZUSTAND]
Output-Format: 6 Bullet-Punkte mit "-" vorangestellt.
Ton: prägnant, verkaufsstark.
Constraints: Kein Wiederholen von Fakten.
```
Mini-Beispiel-Output:
- Originalverpackung inklusive  
- Kaum gebraucht, wie neu  
- Versand möglich (5€)

2.9 Social-Proof-Ergänzung
- Wann nutzen: Wenn du Käuferbewertungen oder Referenzen erwähnen willst.
```text
Aufgabe: Schreibe 3 kurze Social-Proof-Sätze, die in die Anzeige passen.
Platzhalter: [BEWERTUNG], [ANZAHL_KAUFER]
Output-Format: 3 Zeilen, 1–2 Sätze je Zeile.
Ton: glaubwürdig, unaufgeregt.
Constraints: Keine erfundenen Bewertungen; wenn keine vorhanden, verwende „von mir geprüft“ statt Fake.
```
Mini-Beispiel-Output:
Top Zustand – wurde nur wenige Male genutzt, sehr zufrieden.  
Bereits von mehreren Käufer:innen vor Ort geprüft.

2.10 FAQ für die Anzeige
- Wann nutzen: Wenn oft Fragen zur Größe, Versand oder Zustand kommen.
```text
Aufgabe: Erstelle 6 FAQ-Einträge mit kurzer Antwort.
Platzhalter: [FRAGE1], [ANTWORT1], [VERSAND], [RÜCKGABE]
Output-Format: 6 Q&A-Paare, jeweils 1–2 Sätze.
Ton: hilfreich, klar.
Constraints: Beantworte nur Dinge, die du garantieren kannst.
```
Mini-Beispiel-Output:
F: Versand möglich? A: Ja, kostet 6€ (DPD).  
F: Rückgabe? A: Privatverkauf, keine Rücknahme.

3. Preispsychologie & Verhandlungsantworten (6 Prompts)
3.1 Psychologische Preisformulieren
- Wann nutzen: Wenn du Preis attraktiv und seriös darstellen willst.
```text
Aufgabe: Formuliere 4 Preisvarianten (Vollpreis, Verhandelbar, Sofortkauf-Rabatt, Bundle-Preis).
Platzhalter: [LISTENPREIS], [DEINPREIS], [BUNDLE_PREIS]
Output-Format: 4 kurze Zeilen mit Begründung (1 Satz).
Ton: strategisch, transparent.
Constraints: Keine falschen UVP-Angaben.
```
Mini-Beispiel-Output:
Listenpreis: 200€ (Neupreis laut Hersteller).  
Mein Preis: 110€ wegen leichter Gebrauchsspuren.

3.2 Standard-Antwort auf "Zu teuer"
- Wann nutzen: Für häufige Käufer-Nachricht „Ist das nicht zu teuer?“
```text
Aufgabe: Formuliere 5 Varianten einer höflichen, verkaufsfördernden Antwort auf „Zu teuer“.
Platzhalter: [PREIS], [VORTEIL1], [ZUSTAND]
Output-Format: 5 kurze Nachrichten, je 1–2 Sätze.
Ton: freundlich, fest in Preisargumentation.
Constraints: Keine aggressiven Formulierungen, Option für VB angeben.
```
Mini-Beispiel-Output:
Danke für das Interesse—inkl. Versand und guter Zustand, daher 120€.  
Ich kann 5€ nachlassen bei Abholung heute.

3.3 Preisanker-Antwort (Angebotsstrategie)
- Wann nutzen: Wenn du eine Gegenverhandlung führen willst.
```text
Aufgabe: Schreibe 4 antworten mit Preisanker-Technik (höherer UVP vs. dein Preis).
Platzhalter: [NEUPREIS], [DEINPREIS], [LETZTPREIS]
Output-Format: 4 Textvorschläge, 1–2 Sätze.
Ton: souverän, wertorientiert.
Constraints: Keine erfundenen Neupreise.
```
Mini-Beispiel-Output:
Neupreis war 349€, jetzt 180€ — deutlich günstiger als neu.  
Letzter Preis heute 170€ bei Abholung.

3.4 Schnelle „VB“-Antworten
- Wann nutzen: Für „Was ist letzte Preis?“-Anfragen.
```text
Aufgabe: Erstelle 6 kurze Antworten für „Was ist letzte Preis?“ mit jeweils anderer Konstellation (sofort, Abholung, PayPal).
Platzhalter: [PREIS], [ABHOLORT], [ZAHLUNGSMETHODE]
Output-Format: 6 Zeilen, 1 Satz je Zeile.
Ton: höflich, entscheidungsfördernd.
Constraints: Keinen falschen Zahlplan vorschlagen.
```
Mini-Beispiel-Output:
Bei Abholung in [ABHOLORT] heute: 95€.  
PayPal Freunde: 90€ (inkl. Versand).

3.5 Taktik: „Bestes Angebot“ vs „Erster kommt“
- Wann nutzen: Um Konkurrenzdruck zu erzeugen oder Eile zu kommunizieren.
```text
Aufgabe: Formuliere 4 Nachrichten: a) „bester Preis“, b) „Erster kommt“, c) „Reservierung möglich“, d) „Kein Interesse an Tauschangeboten“.
Platzhalter: [PREIS], [RESERVIERT]
Output-Format: 4 kurze Sätze.
Ton: klar, respektvoll.
Constraints: Keine unfairen Reservierungsbedingungen.
```
Mini-Beispiel-Output:
Bester Preis heute: 85€, danach wieder 95€.  
Reservierung möglich mit 20€ Anzahlung.

3.6 Rabatt-Spielraum kommunizieren
- Wann nutzen: Wenn du Spielraum zeigen, aber nicht alles verraten willst.
```text
Aufgabe: Schreibe 5 Varianten, die Rabattbereitschaft zeigen, ohne konkreten Betrag zu nennen.
Platzhalter: [PREIS]
Output-Format: 5 kurze Sätze.
Ton: wertschätzend, verkaufsfördernd.
Constraints: Keine irreführenden Aussagen.
```
Mini-Beispiel-Output:
Ich bin offen für faire Angebote, am besten per Nachricht.  
Bei Abholung am Wochenende gebe ich 5€ Nachlass.

4. Einwandbehandlung per Chat/Nachricht (6 Prompts)
4.1 Sofort-Antwort auf Nachfrage „Ist noch da?“
- Wann nutzen: Wenn Käufer zuerst Verfügbarkeit checken.
```text
Aufgabe: Schreibe 6 verschiedene Antworten auf „Ist das noch da?“ (formell, locker, kurz, mit Preis, mit Fotos).
Platzhalter: [PRODUKTNAME], [ZUSTAND], [PREIS]
Output-Format: 6 Zeilen, 1–2 Sätze.
Ton: variabel (auswahlbar).
Constraints: Klarheit zur Verfügbarkeit.
```
Mini-Beispiel-Output:
Ja, ist noch da. Abholung möglich heute.  
Ja, kann Fotos schicken—was interessiert dich?

4.2 Zweifel am Zustand entkräften
- Wann nutzen: Wenn Käufer den Zustand bezweifelt.
```text
Aufgabe: Erzeuge 5 Antworten, die Zustand belegen (Fotos, Test, Details).
Platzhalter: [MÄNGEL], [FOTO], [TEST]
Output-Format: 5 kurze Antworten.
Ton: sachlich, beruhigend.
Constraints: Nur geprüfte Angaben machen.
```
Mini-Beispiel-Output:
Fotos senden? Ich schicke dir gern Nahaufnahmen der Gebrauchsspuren.  
Funktionstest gerade gemacht: alles ok, siehe Video.

4.3 Verhandlungs-Stopp freundlich formulieren
- Wann nutzen: Wenn du niedrige Angebote ablehnen willst.
```text
Aufgabe: Schreibe 6 höfliche „geht nicht“-Antworten auf unsinnige Angebote.
Platzhalter: [ANGEBOT], [PREIS]
Output-Format: 6 kurze Sätze.
Ton: bestimmt, respektvoll.
Constraints: Kein sarkastischer Ton.
```
Mini-Beispiel-Output:
Danke, aber 40€ ist zu niedrig. Mein Preis liegt bei 85€.  
Ich kann nicht weiter runtergehen, aber Abholung heute möglich.

4.4 „Reservieren“-Antwort mit Bedingungen
- Wann nutzen: Wenn Käufer um Reservierung bittet.
```text
Aufgabe: Formuliere 5 Reservierungs-Antworten mit klaren Bedingungen (Anzahlung, Zeitfenster).
Platzhalter: [ZEIT], [ANZAHLUNG], [ORT]
Output-Format: 5 klare Regelnätze.
Ton: professionell, fair.
Constraints: Keine unzulässigen Anzahlungsforderungen.
```
Mini-Beispiel-Output:
Reserviere bis [ZEIT] bei Anzahlung 10€ per PayPal Friends.  
Reservierung ohne Anzahlung nur bis morgen 12 Uhr.

4.5 Zahlungsmodalitäten klarstellen
- Wann nutzen: Wenn Käufer nach Zahlungsmethode fragt.
```text
Aufgabe: Schreibe 6 Antworten zu Payment-Optionen (Bar, Überweisung, PayPal, Rechnung).
Platzhalter: [ZAHLUNGSART], [GEWÜNSCHT]
Output-Format: 6 kurze Zeilen.
Ton: klar, sicherheitsbewusst.
Constraints: Datenschutz beachten (keine Bankdaten im Chat).
```
Mini-Beispiel-Output:
Bar bei Abholung bevorzugt.  
PayPal mit Käuferschutz möglich (Gebühr Käufer).

4.6 Konflikt-Deeskalation (falls Käufer unzufrieden ist)
- Wann nutzen: Wenn ein Käufer nach Kauf Unzufriedenheit äußert.
```text
Aufgabe: Formuliere 5 deeskalierende Antworten inklusive Lösungsoptionen (Rückgabe, Teilrefund).
Platzhalter: [PROBLEM], [LÖSUNG]
Output-Format: 5 kurze Nachrichtenvorschläge.
Ton: empathisch, lösungsorientiert.
Constraints: Keine rechtlich bindenden Versprechen ohne Absprache.
```
Mini-Beispiel-Output:
Tut mir leid, dass das so ist. Vorschlag: Rückgabe innerhalb 7 Tage gegen Erstattung.  
Ich biete 15€ Teilrefund, wenn du das akzeptierst.

5. Bundle-, Upsell- und Cross-Sell-Texte (5 Prompts)
5.1 Einfaches Upsell (add-on)
- Wann nutzen: Wenn du Zubehör zusätzlich verkaufen willst.
```text
Aufgabe: Schreibe 6 Upsell-Texte für Zubehör zum Hauptprodukt.
Platzhalter: [HAUPTPRODUKT], [ZUBEHÖR], [UPSELL_PREIS]
Output-Format: 6 kurze Sätze, 1–2 Sätze je Text.
Ton: beratend, überzeugend.
Constraints: Rabatt nennen wenn echt.
```
Mini-Beispiel-Output:
Zum [HAUPTPRODUKT] biete ich das Original-Ladegerät für 12€ dazu.  
Kombi: Tasche + [HAUPTPRODUKT] nur 15€ extra.

5.2 Bundle-Angebot formulieren
- Wann nutzen: Wenn du mehrere Artikel zusammen günstiger verkaufen willst.
```text
Aufgabe: Formuliere 4 Bundle-Descriptions mit Preisvorteil in Prozent und absolut.
Platzhalter: [ARTIKEL1], [ARTIKEL2], [BUNDLE_PREIS]
Output-Format: 4 kurze Angebote, 1 Satz + Vorteil.
Tone: klar, attraktiv.
Constraints: Prozentangaben korrekt berechnen.
```
Mini-Beispiel-Output:
Bundle: Kamera + Tasche für 220€ (statt 270€) – 50€ Ersparnis.  
Set: 3 Bücher für 12€ (30% günstiger).

5.3 Cross-Sell-Nachricht nach Interesse
- Wann nutzen: Wenn Käufer Interesse an einem Artikel zeigt.
```text
Aufgabe: Schreibe 5 Cross-Sell-Nachrichten, die verwandte Artikel vorschlagen.
Platzhalter: [PRODUKTNAME], [VERWANDT1], [PREISVERGLEICH]
Output-Format: 5 kurze Zeilen.
Ton: hilfreich, unaufdringlich.
Constraints: Nur passende Empfehlungen.
```
Mini-Beispiel-Output:
Passt gut dazu: passende Hülle für 9€. Soll ich sie dazu packen?  
Ich habe auch passenden Adapter, 5€ günstiger als neu.

5.4 Limited-Offer Upsell
- Wann nutzen: Wenn du Anreize für schnellen Mehrkauf brauchst.
```text
Aufgabe: Formuliere 4 begrenzte Upsell-Angebote („nur heute“).
Platzhalter: [ZEITRAUM], [RABATT]
Output-Format: 4 Sätze.
Ton: leicht drängend, ehrlich.
Constraints: Zeitangaben echt und überprüfbar.
```
Mini-Beispiel-Output:
Nur heute: Zusätzliche Tasche +5€ statt 10€.  
Bei Abholung heute: 10% Rabatt auf Zubehör.

5.5 Kombi-Pricing Argumentation
- Wann nutzen: Um Käufern den Mehrwert des Bundles zu erklären.
```text
Aufgabe: Erstelle 3 kurze Argumente, warum Bundle kaufen sinnvoll ist (Kosten, Komfort, Kompatibilität).
Platzhalter: [BUNDLE], [VORTEIL]
Output-Format: 3 Bullet-Punkte.
Ton: überzeugend, logisch.
Constraints: Keine Übertreibungen.
```
Mini-Beispiel-Output:
- Günstiger als Einzelkauf (Ersparnis 20%).  
- Sofort alles dabei, keine Nachbestellung nötig.

6. Nischen-Packs: Mode/Vinted, Elektronik, Möbel/Haushalt, Handmade/Etsy (je 3 = 12)
6.1 Mode/Vinted – Größen- & Styling-Text
- Wann nutzen: Für Modeanzeigen mit Outfit-Vorschlägen.
```text
Aufgabe: Schreibe 6 Styling- und Größenhinweise (je 1 Satz) für ein Kleidungsstück.
Platzhalter: [GRÖSSE], [PASSFORM], [STIL]
Output-Format: 6 Zeilen.
Ton: inspirierend, hilfreich.
Constraints: Keine medizinischen Aussagen.
```
Mini-Beispiel-Output:
Fällt wie Größe M aus, eher schmal geschnitten.  
Toll kombinierbar mit Stiefeln und Lederjacke für Herbst-Look.

6.2 Mode/Vinted – Pflegehinweise & Zustand
- Wann nutzen: Um Käufern Sicherheit zur Pflege zu geben.
```text
Aufgabe: Erstelle 4 kurze Pflegehinweise + 2 Sätze zum Zustand.
Platzhalter: [PFLEGE], [ZUSTAND]
Output-Format: 4 Bullets + 2 Sätze.
Ton: praktisch, ehrlich.
Constraints: Keine falschen Pflegeanweisungen.
```
Mini-Beispiel-Output:
- 30°C Feinwäsche empfohlen  
- Nicht chemisch reinigen  
Zustand: Nur 2x getragen, keine Flecken.

6.3 Mode/Vinted – Bilder- & Listing-Checklist
- Wann nutzen: Vor dem Hochladen für bessere Anzeigenperformance.
```text
Aufgabe: Liste 8 Bild- und Text-Checks speziell für Vinted.
Platzhalter: [CHECKLISTE]
Output-Format: 8 Bullets.
Ton: präzise, umsetzbar.
Constraints: Fokus auf mobile Darstellung.
```
Mini-Beispiel-Output:
- Naheaufnahme des Labels  
- Ganzkörper-Foto an Model  
- Maße angeben (Brust, Länge)

6.4 Elektronik – Garantie- & Seriennummer-Template
- Wann nutzen: Wenn du Infos zu Garantie & Seriennummer angeben willst.
```text
Aufgabe: Erstelle 4 kurze Sätze, wie Garantie, Seriennummer und Kaufbeleg kommuniziert werden.
Platzhalter: [GARANTIE], [SERIAL], [KAUFBELEG]
Output-Format: 4 Zeilen.
Ton: sachlich, vertrauensfördernd.
Constraints: Keine sensiblen Daten öffentlich teilen (nur per Nachricht).
```
Mini-Beispiel-Output:
Restgarantie bis [DATUM], Kaufbeleg vorhanden.  
Seriennummer gebe ich auf Anfrage per Privatnachricht.

6.5 Elektronik – Akku- & Funktions-Check
- Wann nutzen: Für Geräte mit Akku (Handy, Laptop).
```text
Aufgabe: Schreibe 5 Prüfpunkte, die du vor Verkauf testest und angibst.
Platzhalter: [AKKU_ZUSTAND], [TEST]
Output-Format: 5 kurze Bullet-Punkte.
Ton: technisch, vertrauenswürdig.
Constraints: Echte Messergebnisse angeben.
```
Mini-Beispiel-Output:
- Akku-Kapazität: 88% (iOS)  
- Funktionstest Kamera: OK

6.6 Elektronik – Kurzbeschreibung für Auktionen
- Wann nutzen: Für eBay-Auktionen mit Fokus auf Specs und Zustand.
```text
Aufgabe: Verfasse eine 3-teilige Auktionsbeschreibung: Kurzintro, Top-Features, Versandinfo.
Platzhalter: [MODELL], [FEATURES], [VERSAND]
Output-Format: 3 Absätze, je 1–2 Sätze.
Ton: knapp, verkaufsfördernd.
Constraints: Keine Werbeübertreibungen.
```
Mini-Beispiel-Output:
iPhone XR, 64GB, guter Zustand.  
Top-Features: Face ID, 12MP Kamera.  
Versand: 4€ als versichertes Paket.

6.7 Möbel/Haushalt – Maße & Material
- Wann nutzen: Für Möbel mit Bedeutung der Maße und Material.
```text
Aufgabe: Erstelle 6 präzise Satzformulierungen für Maße, Material und Aufbauzustand.
Platzhalter: [MAßE], [MATERIAL], [AUFBAUSTATUS]
Output-Format: 6 Zeilen.
Ton: sachlich, präzise.
Constraints: Maße in cm, Material korrekt benennen.
```
Mini-Beispiel-Output:
Maße: 120 x 60 x 75 cm (L x B x H).  
Material: Massivholz Eiche, geölt.

6.8 Möbel/Haushalt – Liefer-/Abholoptionen
- Wann nutzen: Wenn du Optionen für Lieferung/Abholung darstellen willst.
```text
Aufgabe: Formuliere 5 Varianten für Liefer-/Abholbedingungen inkl. Preis.
Platzhalter: [ABHOLORT], [LIEFERPREIS]
Output-Format: 5 kurze Angebote.
Ton: klar, kundenorientiert.
Constraints: Keine unrealistischen Lieferangebote.
```
Mini-Beispiel-Output:
Abholung in [ABHOLORT], gern beim Käufer helfen zu verladen.  
Lieferung lokal bis 20 km: 25€.

6.9 Möbel/Haushalt – Gebrauchsspuren transparent beschreiben
- Wann nutzen: Wenn Möbel Gebrauchsspuren haben, aber trotzdem verkaufsfähig sind.
```text
Aufgabe: Schreibe 5 Formulierungen, die Gebrauchsspuren ehrlich, aber nicht abschreckend darstellen.
Platzhalter: [MÄNGEL], [ZUSTAND]
Output-Format: 5 Sätze.
Ton: ehrlich, positiv.
Constraints: Keine Beschönigungen, Fotos verlinken empfehlen.
```
Mini-Beispiel-Output:
Kleine Kratzer an der Ecke (siehe Foto), insgesamt stabil und gepflegt.  
Patina am Holzkorpus, verleiht Charakter.

6.10 Handmade/Etsy – Produktbeschreibung mit Story
- Wann nutzen: Für handgemachte, individualisierte Produkte.
```text
Aufgabe: Erzeuge eine 150–200 Wörter lange Produktbeschreibung mit Maker-Story, Materialien, Personalisierungsoptionen.
Platzhalter: [MAKER], [MATERIAL], [PERSONALISIERUNG], [LIEFERZEIT]
Output-Format: 2–3 Absätze.
Ton: warm, authentisch, verkaufsfördernd.
Constraints: Lieferzeit realistisch angeben.
```
Mini-Beispiel-Output:
Jede Kette wird von [MAKER] in Handarbeit gefertigt...  
Material: 925er Silber, Gravurmöglichkeit gegen Aufpreis.  
Lieferzeit: 7–10 Werktage.

6.11 Handmade/Etsy – Produktpflege & Geschenk-Texte
- Wann nutzen: Für Geschenkhinweise und Pflegeempfehlungen.
```text
Aufgabe: Formuliere 6 kurze Sätze: 3 Pflegehinweise, 3 Geschenk-CTA.
Platzhalter: [PFLEGE], [GESCHENK]
Output-Format: 6 Zeilen.
Ton: freundlich, serviceorientiert.
Constraints: Pflegehinweise korrekt.
```
Mini-Beispiel-Output:
Nicht ins Wasser legen, nur mit weichem Tuch abwischen.  
Perfekt als Geschenk – Geschenkverpackung gegen 3€ Aufpreis.

6.12 Handmade/Etsy – Personalisierung & Zusatzoptionen
- Wann nutzen: Wenn Kunden Produktoptionen wählen können.
```text
Aufgabe: Erstelle 4 Formulierungen für Zusatzoptionen (Gravur, Geschenkverpackung, Express).
Platzhalter: [OPTION], [PREIS_AUFZ]
Output-Format: 4 Zeilen.
Ton: einladend, klar.
Constraints: Zusatzkosten transparent nennen.
```
Mini-Beispiel-Output:
Gravur (bis 10 Zeichen) +8€ — bitte Text bei Bestellung angeben.  
Express-Fertigung 3–5 Werktage +12€.

7. A/B-Test & Rewrite-Prompts (4 Prompts)
7.1 A/B-Titel-Test-Generator
- Wann nutzen: Um zwei Titelvarianten für A/B-Test zu erzeugen.
```text
Aufgabe: Erzeuge 4 Titelpaarungen (A und B) zum A/B-Test.
Platzhalter: [PRODUKTNAME], [KEYWORD]
Output-Format: Markdown mit "A:" und "B:" pro Paar, 4 Paare.
Ton: variabel (A: sachlich, B: emotional).
Constraints: Beide Titel max. 60 Zeichen.
```
Mini-Beispiel-Output:
A: Lederjacke Vintage M – top Zustand  
B: Vintage Lederjacke – Unikat in M

7.2 Rewrite für bessere Conversion (shorten)
- Wann nutzen: Wenn Beschreibung zu lang/kompliziert ist.
```text
Aufgabe: Kürze folgenden Text auf max. 120 Zeichen, erhalte alle Fakten: [TEXT_EINGABE]
Output-Format: Ein Satz, max. 120 Zeichen.
Ton: knapp, verkaufsorientiert.
Constraints: Keine neue Infos hinzufügen.
```
Mini-Beispiel-Output:
iPhone 8 64GB, schwarz, guter Zustand, inkl. Ladegerät — 95€.

7.3 Rewrite für andere Zielgruppe
- Wann nutzen: Wenn du denselben Artikel an eine andere Zielgruppe anpassen willst.
```text
Aufgabe: Schreibe [TEXT_EINGABE] neu für [ZIELGRUPPE] (z. B. technikaffin, hipster, budget-käufer).
Output-Format: Max. 120 Wörter.
Ton: an Zielgruppe angepasst.
Constraints: Fakten unverändert lassen.
```
Mini-Beispiel-Output:
Für technikaffine Käufer: MacBook klar performanter mit 16GB RAM, ideal für Schnittsoftware...

7.4 Test-Varianten für CTA
- Wann nutzen: Wenn du verschiedene CTAs testen willst.
```text
Aufgabe: Generiere 6 CTA-Formulierungen für Anzeigen (Kurz, Dringlich, Soft, Fragenform).
Platzhalter: [ACTION]
Output-Format: 6 Zeilen.
Ton: variabel.
Constraints: Jede CTA max. 6 Wörter.
```
Mini-Beispiel-Output:
Jetzt kaufen — Versand heute  
Nachricht für Abholung schreiben

## Bonus: 7-Tage-Verkaufsplan (kurz)
Tag 1: Fotos machen + Basis-Listing (Titel+Kurzbeschreibung).  
Tag 2: Optimieren: SEO-Titel + Bullet-Highlights einfügen.  
Tag 3: Preisstrategie testen (3 Preisvarianten online).  
Tag 4: Promoted Post / soziale Kanäle (einmal teilen).  
Tag 5: Chat-Vorlagen aktivieren & antworten (Schnellantworten).  
Tag 6: A/B-Test der Titel / CTA auswerten; Gewinner auswählen.  
Tag 7: Angebot an Stamminteressenten & evtl. Rabattaktion starten.

## Bonus: Checkliste vor dem Absenden
- Fotos: 1 Ganzkörper, 3 Detailfotos, 1 Label/Seriennummer.  
- Titel: Hauptkeyword zuerst, max. 60–80 Zeichen.  
- Beschreibung: Zustand & Mängel offenlegen; 3–6 Bullets.  
- Preis: Psychologisch rund (z. B. 99 statt 100) + VB-Angabe.  
- Versand/Abholung: Kosten & Frist nennen.  
- Kommunikation: 5 vorbereitete Chat-Antworten (Verhandlung, Reservierung).  
- Rechtliches: Privatverkauf klar markieren, keine Gewährleistung versprechen.  
- Final: Rechtschreibprüfung, Maße & Zahlen prüfen, Anzeigen-Preview kontrollieren.

## Lizenzhinweis
Persönliche Nutzung erlaubt. Kein Weiterverkauf, keine Weitergabe der Prompt-Sammlung als Produkt oder in unveränderter Form. Alle Texte sind Vorlagen; prüfe Angaben (Zustand, Maße, Seriennummer) vor Veröffentlichung.