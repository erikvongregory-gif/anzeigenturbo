# 5 Sofort-Prompts: Bessere Kleinanzeigen heute

1) Titel: Headlines, die klicken
Wann: Beim Erstellen der Anzeige â€” brauchst mehrere Titelvarianten fÃ¼r Tests.
Codeblock-Prompt:
```
Schreibe 5 Anzeigen-Titel fÃ¼r [PRODUKT] in [STADT]. Output-Format: nummerierte Liste (1â€“5). Varianten: 1) Suchoptimiert (Kurz, Keyword sichtbar), 2) Emotional (VerkaufsauslÃ¶ser), 3) Faktenbasiert (Zustand+GrÃ¶ÃŸe), 4) Frage/Neugier, 5) SchnÃ¤ppchen-Hinweis. Tone: direkt, vertrauenswÃ¼rdig. Constraints: max. 60 Zeichen pro Titel, kein Emoji, Preis [PREIS] optional, Marke [MARKE] einbauen wenn vorhanden.
```
Mini-Beispiel:
1. Vintage Lederjacke Gr. M â€“ Top-Zustand  
2. Endlich die perfekte Lederjacke fÃ¼r kÃ¼hle Tage  
3. Lederjacke, GrÃ¶ÃŸe M, kaum getragen, 89â‚¬  
4. Suchst du eine robuste Retro-Lederjacke?  
5. SchnÃ¤ppchen: Lederjacke M, Sofort 89â‚¬ (Abholung)

2) Titel: Strukturierte Beschreibung (Kurz + Bullet)
Wann: FÃ¼r die Anzeigeseite â€” klare, scannbare Beschreibung mit Vertrauen.
Codeblock-Prompt:
```
Erstelle eine Kleinanzeigen-Beschreibung fÃ¼r [PRODUKT]. Output-Format: 1 Satz Lead (max. 120 Zeichen), dann 4 Bullet-Punkte (Eigenschaften/Material/Zustand/Versand), dann 2-Satz Nutzungsstory (wie/wo getragen), abschlieÃŸend 1 Call-to-Action (ein Satz). Tone: ehrlich, verkaufsstark, sympathisch. Constraints: GesamtlÃ¤nge max. 400 WÃ¶rter, keine Emojis, Zustand [ZUSTAND] klar benennen, Preis [PREIS] angeben.
```
Mini-Beispiel:
Lead: Gebe kaum getragene Vintage-Lederjacke Gr. M â€” perfekt fÃ¼r HerbstspaziergÃ¤nge.  
â€¢ Echtes Leder, Innenfutter intakt  
â€¢ GrÃ¶ÃŸe M (passt 38â€“40)  
â€¢ Geringe Gebrauchsspuren an den Ã„rmeln  
â€¢ Abholung in Berlin oder Versand 6â‚¬  
Story: Ich habe die Jacke nur bei besonderen Gelegenheiten getragen. Sie verleiht jedem Outfit sofort Charakter.  
CTA: Bei Interesse einfach Nachricht mit gewÃ¼nschter Abholzeit senden.

3) Titel: Antworten auf KÃ¤uferfragen & Verhandlungs-Templates
Wann: Beim Reagieren auf Nachrichten â€” schnell antworten, Preise sichern.
Codeblock-Prompt:
```
Schreibe 3 kurze Antwortvorlagen fÃ¼r KÃ¤uferanfragen zu [PRODUKT] mit Preis [PREIS]. Output-Format: 1) Interesse bestÃ¤tigen (freundlich), 2) Kontern bei Angebot 10% unter Preis, 3) Abholungsvereinbarung (Termin + Adresse). Tone: hÃ¶flich, bestimmt, verkaufsorientiert. Constraints: max. 2-3 SÃ¤tze pro Vorlage, kein Smalltalk, immer Preis nennen, RÃ¼ckfragen vermeiden.
```
Mini-Beispiel:
1) Interesse: Hi â€” die Lederjacke ist noch da. 89â‚¬ und Abholung in Prenzlauer Berg mÃ¶glich. Wann passt es dir?  
2) Gegenangebot: Danke fÃ¼rs Angebot â€” 80â‚¬ wÃ¤re mir zu wenig. Ich kÃ¶nnte auf 85â‚¬ runtergehen, Abholung bevorzugt.  
3) Abholung: Super, 85â‚¬ ist reserviert. Abholung morgen 18â€“19 Uhr, NÃ¤he S+U [STADT-BAHN]. Kurz Bescheid geben, falls sich was Ã¤ndert.

4) Titel: Keyword- & Tag-Set (Sichtbarkeit erhÃ¶hen)
Wann: Beim AusfÃ¼llen von Tags, Suchbegriffen oder fÃ¼r SEO in Titeln.
Codeblock-Prompt:
```
Erstelle 12 Suchbegriffe/Tags fÃ¼r [PRODUKT] in [STADT] mit Fokus auf KÃ¤ufer-Intent. Output-Format: 3 Kategorien je 4 Begriffe: 1) Exact Match (Kurzkeywords), 2) Long-Tail (SuchsÃ¤tze), 3) Synonyme/Varianten. Tone: neutral, suchorientiert. Constraints: alle Begriffe kleingeschrieben, keine Sonderzeichen, komma-getrennt.
```
Mini-Beispiel:
Exact Match: lederjacke, vintage lederjacke, lederjacke gr m, herren lederjacke  
Long-Tail: vintage lederjacke berlin kaufen, echte lederjacke gebraucht gr m, lederjacke retro 80er, robuste herbstjacke herren  
Synonyme: bikerjacke, echtlederjacke, retrojacke, secondhand lederjacke

5) Titel: Mobile-Preview + Erste Zeile (Max-Impact)
Wann: FÃ¼r die erste Anzeilen, die man auf dem Smartphone sieht.
Codeblock-Prompt:
```
Formuliere eine Mobile-Preview fÃ¼r [PRODUKT] mit Preis [PREIS]. Output-Format: 1. Zeile (Headline-Preview) max. 40 Zeichen, 2. Zeile (Subline) max. 90 Zeichen, danach 1 Satz CTA (max. 80 Zeichen). Tone: knapp, handlungsauffordernd. Constraints: Preis muss enthalten sein, kein Emoji, keine Hashtags.
```
Mini-Beispiel:
Headline: Vintage Lederjacke Gr. M â€“ 89â‚¬  
Subline: Echtes Leder, kaum getragen, Abholung in Prenzlauer Berg oder Versand.  
CTA: Schreib kurz, wenn du sie heute abholen willst.

Das vollstÃ¤ndige AnzeigenTurbo-System (45+ Prompts + 7-Tage-Plan) gibt es fÃ¼r 9â‚¬.
---

# Bonus Mini (Prompts 6–10)

## 6) Preis-Anker
Wann: Vor dem Einstellen des Preises.
```
Schlage 3 Preise fuer [PRODUKT] vor (aggressiv / fair / Premium) inkl. 1-Satz Begruendung. Zustand [ZUSTAND], Vergleichsmarkt [STADT].
```

## 7) SEO-Keywords
Wann: Titel + erste Beschreibungssaetze.
```
Liste 12 Suchbegriffe fuer [PRODUKT] auf [PLATTFORM], sortiert nach Kaufintent. Markiere Top-3 fuer den Titel.
```

## 8) Vertrauenstext
Wann: Wenn Kaeufer skeptisch wirken.
```
Schreibe 5 Trust-Saetze fuer [PRODUKT]: Zustand ehrlich, Abholung/Versand, keine versteckten Maengel, warum du verkaufst, Rueckfragen willkommen.
```

## 9) Bundle-Upsell
Wann: Mehrere aehnliche Artikel.
```
Formuliere ein Bundle-Angebot aus [PRODUKT1], [PRODUKT2], [PRODUKT3] mit Bundle-Preis [PREIS] und 2 Vorteilen.
```

## 10) Rewrite schwach -> stark
Wann: Bestehende Anzeige performt nicht.
```
Schreibe diese Anzeige neu (Titel + Lead + 4 Bullets + CTA). Original: """[TEXT]""". Behalte Fakten, schaerfe Klarheit und Keywords.
```

Vollversion AnzeigenTurbo (45+ Prompts, 9€): https://anzeigenturbo.github.io/anzeigenturbo/
