const tarotkarten = [
    { 
      name: "Der Narr (The Fool)", 
      image: "/images/the_fool.jpg", 
      meaning: "Der Narr steht für Neuanfang, Abenteuer und Unschuld. Er ermutigt dazu, Risiken einzugehen und dem Ruf des Herzens zu folgen.", 
      meditation: "Was möchte ich in meinem Leben neu beginnen?", 
      tips: "Seien Sie offen für neue Erfahrungen und haben Sie keine Angst, Fehler zu machen."
    },
    { 
      name: "Der Magier (The Magician)", 
      image: "/images/the_magician.jpg", 
      meaning: "Der Magier symbolisiert Willenskraft, Manifestation und die Macht des Geistes. Er zeigt, dass alles möglich ist, wenn man seine Fähigkeiten einsetzt.", 
      meditation: "Wie kann ich meine Fähigkeiten und Talente besser nutzen?", 
      tips: "Fokussieren Sie sich auf Ihre Ziele und nutzen Sie Ihre Fähigkeiten, um sie zu erreichen."
    },
    { 
      name: "Die Hohepriesterin (The High Priestess)", 
      image: "/images/the_high_priestess.jpg", 
      meaning: "Die Hohepriesterin repräsentiert Intuition, Geheimnisse und das Unbewusste. Sie fordert auf, auf die innere Stimme zu hören.", 
      meditation: "Welche Geheimnisse liegen in meinem Inneren verborgen?", 
      tips: "Vertrauen Sie Ihrer Intuition und erkunden Sie Ihre inneren Tiefen."
    },
    { 
      name: "Die Herrscherin (The Empress)", 
      image: "/images/the_empress.jpg", 
      meaning: "Die Herrscherin steht für Fruchtbarkeit, Kreativität und mütterliche Energie. Sie symbolisiert Wachstum und Wohlstand.", 
      meditation: "Wie kann ich mehr Kreativität in mein Leben bringen?", 
      tips: "Nehmen Sie sich Zeit für kreative Projekte und pflegen Sie Ihre Beziehungen."
    },
    { 
      name: "Der Herrscher (The Emperor)", 
      image: "/images/the_emperor.jpg", 
      meaning: "Der Herrscher symbolisiert Autorität, Struktur und Stabilität. Er fordert auf, Verantwortung zu übernehmen und Ordnung zu schaffen.", 
      meditation: "Wo brauche ich mehr Struktur und Disziplin in meinem Leben?", 
      tips: "Setzen Sie klare Ziele und arbeiten Sie diszipliniert daran, sie zu erreichen."
    },
    { 
      name: "Der Hierophant (The Hierophant)", 
      image: "/images/the_hierophant.jpg", 
      meaning: "Der Hierophant steht für Tradition, Spiritualität und Weisheit. Er ermutigt dazu, nach Wissen und spirituellem Wachstum zu streben.", 
      meditation: "Welche spirituellen Praktiken könnten mein Leben bereichern?", 
      tips: "Suchen Sie nach Weisheit und lassen Sie sich von traditionellen Werten leiten."
    },
    { 
      name: "Die Liebenden (The Lovers)", 
      image: "/images/the_lovers.jpg", 
      meaning: "Die Liebenden symbolisieren Liebe, Harmonie und Entscheidungen. Sie repräsentieren tiefe Verbindungen und Partnerschaften.", 
      meditation: "Welche Entscheidungen muss ich in meinen Beziehungen treffen?", 
      tips: "Pflegen Sie Ihre Beziehungen und treffen Sie Entscheidungen, die mit Ihrem Herzen im Einklang stehen."
    },
    { 
      name: "Der Wagen (The Chariot)", 
      image: "/images/the_chariot.jpg", 
      meaning: "Der Wagen steht für Erfolg, Entschlossenheit und Kontrolle. Er zeigt, dass Fortschritt durch Willenskraft und Fokus erreicht wird.", 
      meditation: "Wie kann ich meine Ziele schneller erreichen?", 
      tips: "Bleiben Sie entschlossen und behalten Sie die Kontrolle über Ihre Richtung."
    },
    { 
      name: "Die Kraft (Strength)", 
      image: "/images/strength.jpg", 
      meaning: "Die Kraft symbolisiert innere Stärke, Mut und Mitgefühl. Sie zeigt, dass wahre Stärke aus dem Inneren kommt.", 
      meditation: "Wie kann ich meine innere Stärke stärken?", 
      tips: "Seien Sie mutig und mitfühlend gegenüber sich selbst und anderen."
    },
    { 
      name: "Der Eremit (The Hermit)", 
      image: "/images/the_hermit.jpg", 
      meaning: "Der Eremit steht für Einsamkeit, Weisheit und innere Suche. Er fordert auf, sich zurückzuziehen und nach innerer Weisheit zu suchen.", 
      meditation: "Was kann ich durch Selbstreflexion lernen?", 
      tips: "Nehmen Sie sich Zeit für sich selbst und hören Sie auf Ihre innere Stimme."
    },
    { 
      name: "Das Rad des Schicksals (Wheel of Fortune)", 
      image: "/images/wheel_of_fortune.jpg", 
      meaning: "Das Rad des Schicksals symbolisiert Veränderung, Schicksal und Zyklen. Es zeigt, dass alles im Fluss ist und sich ständig verändert.", 
      meditation: "Wie kann ich mich besser an Veränderungen anpassen?", 
      tips: "Akzeptieren Sie Veränderungen und vertrauen Sie darauf, dass sie Teil eines größeren Plans sind."
    },
    { 
      name: "Die Gerechtigkeit (Justice)", 
      image: "/images/justice.jpg", 
      meaning: "Die Gerechtigkeit steht für Fairness, Wahrheit und Karma. Sie fordert auf, ehrlich und gerecht zu handeln.", 
      meditation: "Wie kann ich mehr Gerechtigkeit in mein Leben bringen?", 
      tips: "Handeln Sie fair und suchen Sie nach der Wahrheit in allen Dingen."
    },
    { 
      name: "Der Gehängte (The Hanged Man)", 
      image: "/images/the_hanged_man.jpg", 
      meaning: "Der Gehängte symbolisiert Opfer, Perspektivwechsel und Hingabe. Er zeigt, dass manchmal ein anderer Blickwinkel notwendig ist.", 
      meditation: "Welche alten Muster muss ich loslassen?", 
      tips: "Seien Sie bereit, Opfer zu bringen und Ihre Perspektive zu ändern."
    },
    { 
      name: "Der Tod (Death)", 
      image: "/images/death.jpg", 
      meaning: "Der Tod steht für Transformation, Ende und Neuanfang. Er zeigt, dass das Alte gehen muss, um Platz für das Neue zu schaffen.", 
      meditation: "Was muss in meinem Leben enden, um neu beginnen zu können?", 
      tips: "Akzeptieren Sie Abschiede und begrüßen Sie neue Anfänge."
    },
    { 
      name: "Die Mäßigkeit (Temperance)", 
      image: "/images/temperance.jpg", 
      meaning: "Die Mäßigkeit symbolisiert Ausgeglichenheit, Geduld und Harmonie. Sie zeigt, dass alles in Maßen und im Gleichgewicht sein sollte.", 
      meditation: "Wie kann ich mehr Ausgeglichenheit in mein Leben bringen?", 
      tips: "Üben Sie Geduld und suchen Sie nach Harmonie in Ihren Handlungen."
    },
    { 
      name: "Der Teufel (The Devil)", 
      image: "/images/the_devil.jpg", 
      meaning: "Der Teufel steht für Versuchung, Materialismus und Bindungen. Er warnt vor übermäßigen Abhängigkeiten und Illusionen.", 
      meditation: "Welche Bindungen halten mich zurück?", 
      tips: "Erkennen Sie Ihre Abhängigkeiten und arbeiten Sie daran, sich davon zu befreien."
    },
    { 
      name: "Der Turm (The Tower)", 
      image: "/images/the_tower.jpg", 
      meaning: "Der Turm symbolisiert plötzliche Veränderungen, Umbrüche und Offenbarungen. Er zeigt, dass alte Strukturen zusammenbrechen müssen, um Platz für Neues zu schaffen.", 
      meditation: "Welche Strukturen in meinem Leben müssen verändert werden?", 
      tips: "Seien Sie bereit für Veränderungen und nehmen Sie sie als Chancen wahr."
    },
    { 
      name: "Der Stern (The Star)", 
      image: "/images/the_star.jpg", 
      meaning: "Der Stern symbolisiert Hoffnung, Inspiration und geistige Klarheit. Er zeigt, dass nach einer schwierigen Zeit bessere Tage kommen.", 
      meditation: "Was gibt mir Hoffnung und Inspiration?", 
      tips: "Fokussieren Sie sich auf das Positive und bleiben Sie hoffnungsvoll."
    },
    { 
      name: "Der Mond (The Moon)", 
      image: "/images/the_moon.jpg", 
      meaning: "Der Mond steht für Illusionen, Ängste und das Unbewusste. Er fordert auf, die eigenen Ängste zu konfrontieren und sich den verborgenen Aspekten des Selbst zu stellen.", 
      meditation: "Welche Ängste und Illusionen muss ich überwinden?", 
      tips: "Konfrontieren Sie Ihre Ängste und arbeiten Sie daran, Klarheit zu gewinnen."
    },
    { 
      name: "Die Sonne (The Sun)", 
      image: "/images/the_sun.jpg", 
      meaning: "Die Sonne symbolisiert Freude, Erfolg und Lebenskraft. Sie zeigt, dass nach dunklen Zeiten wieder Licht und positive Energie kommen.", 
      meditation: "Was bringt mir Freude und Energie?", 
      tips: "Genießen Sie die positiven Momente und strahlen Sie Ihre innere Freude aus."
    },
    { 
      name: "Das Gericht (Judgement)", 
      image: "/images/judgement.jpg", 
      meaning: "Das Gericht steht für Erneuerung, Erlösung und Reflexion. Es zeigt, dass es Zeit ist, alte Fehler zu vergeben und einen Neuanfang zu machen.", 
      meditation: "Welche Aspekte meines Lebens benötigen Erlösung?", 
      tips: "Reflektieren Sie über Ihre Vergangenheit und lassen Sie los, was Sie belastet."
    },
    { 
      name: "Die Welt (The World)", 
      image: "/images/the_world.jpg", 
      meaning: "Die Welt symbolisiert Vollendung, Harmonie und Erfüllung. Sie zeigt, dass ein Zyklus zu Ende geht und ein neues Kapitel beginnt.", 
      meditation: "Was habe ich erreicht und was möchte ich als Nächstes erreichen?", 
      tips: "Feiern Sie Ihre Erfolge und bereiten Sie sich auf neue Abenteuer vor."
    },
    // Stäbe
    { 
      name: "Ass der Stäbe", 
      image: "/images/ace_of_wands.jpg", 
      meaning: "Das Ass der Stäbe symbolisiert Neuanfänge, Inspiration und kreatives Potenzial. Es ermutigt Sie, Ihrer Leidenschaft zu folgen.", 
      meditation: "Welche neuen kreativen Unternehmungen sollte ich verfolgen?", 
      tips: "Nutzen Sie Ihr kreatives Potenzial und setzen Sie neue Ideen in die Tat um."
    },
    { 
      name: "Zwei der Stäbe", 
      image: "/images/two_of_wands.jpg", 
      meaning: "Die Zwei der Stäbe stehen für Planung, Entscheidungsfindung und zukünftige Möglichkeiten. Es deutet darauf hin, dass jetzt der richtige Zeitpunkt ist, den nächsten Schritt zu machen.", 
      meditation: "Welche Pläne muss ich aufstellen, um meine Ziele zu erreichen?", 
      tips: "Erstellen Sie konkrete Pläne und überlegen Sie, welche Schritte Sie für zukünftigen Erfolg unternehmen müssen."
    },
    { 
      name: "Drei der Stäbe", 
      image: "/images/three_of_wands.jpg", 
      meaning: "Die Drei der Stäbe bedeuten Erkundung, Expansion und Weitsicht. Es zeigt, dass Ihre Pläne voranschreiten.", 
      meditation: "Wie kann ich meinen Horizont erweitern und neue Möglichkeiten erkunden?", 
      tips: "Seien Sie offen für neue Möglichkeiten und bereit, über Ihre Komfortzone hinauszugehen."
    },
    { 
      name: "Vier der Stäbe", 
      image: "/images/four_of_wands.jpg", 
      meaning: "Die Vier der Stäbe stehen für Feier, Freude und Gemeinschaft. Sie symbolisieren harmonische und glückliche Ereignisse.", 
      meditation: "Welche Erfolge und Freuden kann ich feiern?", 
      tips: "Feiern Sie Ihre Erfolge und genießen Sie Momente der Freude mit anderen."
    },
    { 
      name: "Fünf der Stäbe", 
      image: "/images/five_of_wands.jpg", 
      meaning: "Die Fünf der Stäbe symbolisieren Konflikt, Wettbewerb und Herausforderung. Sie zeigen, dass Auseinandersetzungen auftreten können.", 
      meditation: "Wie kann ich Konflikte in meinem Leben bewältigen?", 
      tips: "Stellen Sie sich Herausforderungen und suchen Sie nach konstruktiven Wegen, um Konflikte zu lösen."
    },
    { 
      name: "Sechs der Stäbe", 
      image: "/images/six_of_wands.jpg", 
      meaning: "Die Sechs der Stäbe stehen für Erfolg, Anerkennung und Sieg. Sie zeigen, dass Ihre Bemühungen anerkannt werden.", 
      meditation: "Welche Erfolge habe ich erreicht?", 
      tips: "Feiern Sie Ihre Erfolge und genießen Sie die Anerkennung Ihrer Leistungen."
    },
    { 
      name: "Sieben der Stäbe", 
      image: "/images/seven_of_wands.jpg", 
      meaning: "Die Sieben der Stäbe symbolisieren Verteidigung, Standhaftigkeit und Mut. Sie zeigen, dass es notwendig ist, für seine Überzeugungen einzustehen.", 
      meditation: "Welche Überzeugungen muss ich verteidigen?", 
      tips: "Bleiben Sie standhaft und verteidigen Sie Ihre Positionen mutig."
    },
    { 
      name: "Acht der Stäbe", 
      image: "/images/eight_of_wands.jpg", 
      meaning: "Die Acht der Stäbe stehen für schnelle Bewegung, Fortschritt und Veränderung. Sie zeigen, dass Dinge schnell voranschreiten.", 
      meditation: "Wie kann ich die aktuellen Veränderungen in meinem Leben nutzen?", 
      tips: "Seien Sie bereit für schnelle Veränderungen und nutzen Sie die Chancen, die sich bieten."
    },
    { 
      name: "Neun der Stäbe", 
      image: "/images/nine_of_wands.jpg", 
      meaning: "Die Neun der Stäbe symbolisieren Ausdauer, Belastbarkeit und Vorbereitung. Sie zeigen, dass es wichtig ist, sich auf Herausforderungen vorzubereiten.", 
      meditation: "Wie kann ich meine Ausdauer und Belastbarkeit stärken?", 
      tips: "Bereiten Sie sich auf mögliche Herausforderungen vor und bleiben Sie belastbar."
    },
    { 
      name: "Zehn der Stäbe", 
      image: "/images/ten_of_wands.jpg", 
      meaning: "Die Zehn der Stäbe stehen für Bürden, Verantwortung und harte Arbeit. Sie zeigen, dass schwere Lasten getragen werden müssen.", 
      meditation: "Welche Bürden trage ich und wie kann ich sie leichter machen?", 
      tips: "Erkennen Sie Ihre Lasten an und suchen Sie nach Wegen, sie zu erleichtern oder Unterstützung zu erhalten."
    },
    { 
      name: "Page der Stäbe", 
      image: "/images/page_of_wands.jpg", 
      meaning: "Der Page der Stäbe symbolisiert Enthusiasmus, Abenteuerlust und Neugier. Er steht für den Drang, Neues zu erkunden.", 
      meditation: "Welche neuen Abenteuer möchte ich erleben?", 
      tips: "Seien Sie offen für neue Abenteuer und folgen Sie Ihrer Neugier."
    },
    { 
      name: "Ritter der Stäbe", 
      image: "/images/knight_of_wands.jpg", 
      meaning: "Der Ritter der Stäbe steht für Mut, Energie und zielgerichtetes Handeln. Er zeigt, dass es Zeit ist, entschlossen zu handeln.", 
      meditation: "Wie kann ich entschlossener und mutiger handeln?", 
      tips: "Handeln Sie entschlossen und nutzen Sie Ihre Energie, um Ihre Ziele zu erreichen."
    },
    { 
      name: "Königin der Stäbe", 
      image: "/images/queen_of_wands.jpg", 
      meaning: "Die Königin der Stäbe symbolisiert Selbstvertrauen, Unabhängigkeit und Wärme. Sie zeigt, dass es wichtig ist, Selbstbewusstsein und Charisma auszustrahlen.", 
      meditation: "Wie kann ich mein Selbstvertrauen stärken?", 
      tips: "Arbeiten Sie an Ihrem Selbstvertrauen und strahlen Sie Ihre innere Stärke aus."
    },
    { 
      name: "König der Stäbe", 
      image: "/images/king_of_wands.jpg", 
      meaning: "Der König der Stäbe steht für Führung, Vision und Unternehmergeist. Er zeigt, dass es wichtig ist, eine klare Vision zu haben und andere zu inspirieren.", 
      meditation: "Wie kann ich eine bessere Führungspersönlichkeit werden?", 
      tips: "Arbeiten Sie an Ihrer Führungsqualität und inspirieren Sie andere mit Ihrer Vision."
    },
    // Kelche
    { 
      name: "Ass der Kelche", 
      image: "/images/ace_of_cups.jpg", 
      meaning: "Das Ass der Kelche symbolisiert neue emotionale Anfänge, Liebe und spirituelles Wachstum. Es ermutigt, das Herz zu öffnen.", 
      meditation: "Welche neuen emotionalen Wege sollte ich erkunden?", 
      tips: "Seien Sie offen für neue emotionale Erfahrungen und lassen Sie Liebe und Mitgefühl in Ihr Leben."
    },
    { 
      name: "Zwei der Kelche", 
      image: "/images/two_of_cups.jpg", 
      meaning: "Die Zwei der Kelche stehen für Partnerschaft, Harmonie und Vereinigung. Sie symbolisieren tiefe Verbindungen.", 
      meditation: "Wie kann ich meine Beziehungen vertiefen und harmonisieren?", 
      tips: "Pflegen Sie Ihre Beziehungen und suchen Sie nach Harmonie und Ausgewogenheit."
    },
    { 
      name: "Drei der Kelche", 
      image: "/images/three_of_cups.jpg", 
      meaning: "Die Drei der Kelche symbolisieren Freundschaft, Feier und gemeinschaftliches Vergnügen. Sie deuten auf freudige Zusammenkünfte hin.", 
      meditation: "Wie kann ich mehr Freude und Gemeinschaft in mein Leben bringen?", 
      tips: "Genießen Sie die Gesellschaft von Freunden und feiern Sie Ihre gemeinsamen Erfolge."
    },
    { 
      name: "Vier der Kelche", 
      image: "/images/four_of_cups.jpg", 
      meaning: "Die Vier der Kelche stehen für Selbstreflexion, Zurückgezogenheit und innere Suche. Sie zeigen, dass es wichtig ist, nach innen zu schauen.", 
      meditation: "Welche Aspekte meines Lebens muss ich überdenken?", 
      tips: "Nehmen Sie sich Zeit für Selbstreflexion und betrachten Sie Ihre inneren Bedürfnisse."
    },
    { 
      name: "Fünf der Kelche", 
      image: "/images/five_of_cups.jpg", 
      meaning: "Die Fünf der Kelche symbolisieren Verlust, Trauer und Bedauern. Sie zeigen, dass es wichtig ist, Trauer zu verarbeiten.", 
      meditation: "Welche Verluste muss ich akzeptieren und loslassen?", 
      tips: "Erlauben Sie sich, zu trauern und finden Sie Wege, mit Verlust umzugehen."
    },
    { 
      name: "Sechs der Kelche", 
      image: "/images/six_of_cups.jpg", 
      meaning: "Die Sechs der Kelche stehen für Nostalgie, Kindheitserinnerungen und das Wiederaufleben alter Gefühle. Sie erinnern daran, die Vergangenheit zu schätzen.", 
      meditation: "Welche schönen Erinnerungen kann ich wiederbeleben?", 
      tips: "Erinnern Sie sich an glückliche Zeiten und lassen Sie diese Erinnerungen Ihr Herz erwärmen."
    },
    { 
      name: "Sieben der Kelche", 
      image: "/images/seven_of_cups.jpg", 
      meaning: "Die Sieben der Kelche symbolisieren Träume, Illusionen und Möglichkeiten. Sie zeigen, dass es viele Optionen gibt, aber auch Verwirrung.", 
      meditation: "Welche meiner Träume sind realistisch und welche sind Illusionen?", 
      tips: "Unterscheiden Sie zwischen realistischen Zielen und bloßen Träumereien."
    },
    { 
      name: "Acht der Kelche", 
      image: "/images/eight_of_cups.jpg", 
      meaning: "Die Acht der Kelche stehen für Aufbruch, Veränderung und das Verlassen von Dingen, die nicht mehr dienen. Sie zeigen, dass es Zeit ist, weiterzuziehen.", 
      meditation: "Was muss ich loslassen, um weiterzukommen?", 
      tips: "Erkennen Sie, wann es Zeit ist, sich von alten Mustern zu lösen und neue Wege zu gehen."
    },
    { 
      name: "Neun der Kelche", 
      image: "/images/nine_of_cups.jpg", 
      meaning: "Die Neun der Kelche symbolisieren Zufriedenheit, Glück und Erfüllung. Sie zeigen, dass Wünsche in Erfüllung gehen.", 
      meditation: "Welche meiner Wünsche sind in Erfüllung gegangen?", 
      tips: "Genießen Sie Ihre Erfolge und schätzen Sie die Erfüllung Ihrer Wünsche."
    },
    { 
      name: "Zehn der Kelche", 
      image: "/images/ten_of_cups.jpg", 
      meaning: "Die Zehn der Kelche stehen für Harmonie, Glück und familiäre Bindungen. Sie symbolisieren ein glückliches und erfülltes Leben.", 
      meditation: "Wie kann ich mehr Harmonie in mein Familienleben bringen?", 
      tips: "Pflegen Sie Ihre familiären Beziehungen und schaffen Sie eine harmonische Umgebung."
    },
    { 
      name: "Page der Kelche", 
      image: "/images/page_of_cups.jpg", 
      meaning: "Der Page der Kelche symbolisiert Kreativität, Intuition und emotionale Offenheit. Er steht für das Erkunden neuer emotionaler und kreativer Wege.", 
      meditation: "Welche neuen emotionalen oder kreativen Wege sollte ich erkunden?", 
      tips: "Seien Sie offen für neue kreative und emotionale Erfahrungen."
    },
    { 
      name: "Ritter der Kelche", 
      image: "/images/knight_of_cups.jpg", 
      meaning: "Der Ritter der Kelche steht für Romantik, Idealismus und die Suche nach emotionaler Erfüllung. Er zeigt, dass es wichtig ist, seinen Gefühlen zu folgen.", 
      meditation: "Wie kann ich mehr Romantik und Idealismus in mein Leben bringen?", 
      tips: "Folgen Sie Ihrem Herzen und streben Sie nach emotionaler Erfüllung."
    },
    { 
      name: "Königin der Kelche", 
      image: "/images/queen_of_cups.jpg", 
      meaning: "Die Königin der Kelche symbolisiert Mitgefühl, Fürsorge und emotionale Tiefe. Sie zeigt, dass es wichtig ist, Mitgefühl für sich und andere zu haben.", 
      meditation: "Wie kann ich mehr Mitgefühl und Fürsorge in mein Leben bringen?", 
      tips: "Seien Sie mitfühlend und fürsorglich gegenüber sich selbst und anderen."
    },
    { 
      name: "König der Kelche", 
      image: "/images/king_of_cups.jpg", 
      meaning: "Der König der Kelche steht für emotionale Reife, Gleichgewicht und Weisheit. Er zeigt, dass es wichtig ist, emotionale Stabilität zu erreichen.", 
      meditation: "Wie kann ich meine emotionale Reife und Stabilität stärken?", 
      tips: "Arbeiten Sie an Ihrer emotionalen Stabilität und nutzen Sie Ihre Weisheit, um anderen zu helfen."
    },
    // Schwerter
    { 
      name: "Ass der Schwerter", 
      image: "/images/ace_of_swords.jpg", 
      meaning: "Das Ass der Schwerter steht für Klarheit, Wahrheit und neue geistige Einsichten. Es ermutigt dazu, die Wahrheit zu erkennen.", 
      meditation: "Welche Wahrheiten muss ich in meinem Leben anerkennen?", 
      tips: "Streben Sie nach Klarheit und erkennen Sie die Wahrheit, auch wenn sie unangenehm ist."
    },
    { 
      name: "Zwei der Schwerter", 
      image: "/images/two_of_swords.jpg", 
      meaning: "Die Zwei der Schwerter stehen für Entscheidungsfindung und innere Konflikte. Sie fordern auf, sich mit schwierigen Entscheidungen auseinanderzusetzen.", 
      meditation: "Welche Entscheidungen muss ich treffen, um innere Klarheit zu erlangen?", 
      tips: "Zögern Sie nicht, schwierige Entscheidungen zu treffen, und suchen Sie nach innerer Balance."
    },
    { 
      name: "Drei der Schwerter", 
      image: "/images/three_of_swords.jpg", 
      meaning: "Die Drei der Schwerter symbolisieren Herzschmerz, Trauer und Verlust. Sie zeigen, dass Heilung nach Schmerz kommt.", 
      meditation: "Wie kann ich den Schmerz in meinem Leben loslassen?", 
      tips: "Erkennen Sie Ihren Schmerz an und arbeiten Sie aktiv daran, Heilung zu finden."
    },
    { 
      name: "Vier der Schwerter", 
      image: "/images/four_of_swords.jpg", 
      meaning: "Die Vier der Schwerter stehen für Ruhe, Erholung und inneren Frieden. Sie zeigen, dass es wichtig ist, sich eine Auszeit zu nehmen.", 
      meditation: "Wie kann ich mehr Ruhe und Erholung in mein Leben bringen?", 
      tips: "Nehmen Sie sich Zeit für Ruhe und Erholung, um inneren Frieden zu finden."
    },
    { 
      name: "Fünf der Schwerter", 
      image: "/images/five_of_swords.jpg", 
      meaning: "Die Fünf der Schwerter symbolisieren Konflikt, Niederlage und Uneinigkeit. Sie zeigen, dass nicht alle Kämpfe es wert sind, geführt zu werden.", 
      meditation: "Welche Konflikte in meinem Leben sind unnötig?", 
      tips: "Vermeiden Sie unnötige Konflikte und suchen Sie nach friedlichen Lösungen."
    },
    { 
      name: "Sechs der Schwerter", 
      image: "/images/six_of_swords.jpg", 
      meaning: "Die Sechs der Schwerter stehen für Übergang, Reise und Veränderung. Sie zeigen, dass es Zeit ist, sich auf eine neue Reise zu begeben.", 
      meditation: "Welche Veränderungen muss ich akzeptieren, um weiterzukommen?", 
      tips: "Seien Sie offen für Veränderungen und bereit, neue Wege zu gehen."
    },
    { 
      name: "Sieben der Schwerter", 
      image: "/images/seven_of_swords.jpg", 
      meaning: "Die Sieben der Schwerter symbolisieren List, Täuschung und strategisches Denken. Sie zeigen, dass es wichtig ist, klug und vorsichtig zu handeln.", 
      meditation: "Wo muss ich klüger und vorsichtiger handeln?", 
      tips: "Seien Sie strategisch und vermeiden Sie Täuschungen, um Ihre Ziele zu erreichen."
    },
    { 
      name: "Acht der Schwerter", 
      image: "/images/eight_of_swords.jpg", 
      meaning: "Die Acht der Schwerter stehen für Einschränkung, Angst und Hilflosigkeit. Sie zeigen, dass es wichtig ist, sich aus selbst auferlegten Fesseln zu befreien.", 
      meditation: "Welche Ängste halten mich zurück?", 
      tips: "Erkennen Sie Ihre Ängste an und suchen Sie nach Wegen, sich davon zu befreien."
    },
    { 
      name: "Neun der Schwerter", 
      image: "/images/nine_of_swords.jpg", 
      meaning: "Die Neun der Schwerter symbolisieren Sorge, Angst und Schlaflosigkeit. Sie zeigen, dass es wichtig ist, sich mit seinen Sorgen auseinanderzusetzen.", 
      meditation: "Was bereitet mir Sorgen und wie kann ich damit umgehen?", 
      tips: "Erkennen Sie Ihre Sorgen an und suchen Sie nach Lösungen, um inneren Frieden zu finden."
    },
    { 
      name: "Zehn der Schwerter", 
      image: "/images/ten_of_swords.jpg", 
      meaning: "Die Zehn der Schwerter stehen für Schmerz, Verrat und endgültige Enden. Sie zeigen, dass ein schwieriger Zyklus zu Ende geht.", 
      meditation: "Welche schwierigen Zyklen muss ich beenden?", 
      tips: "Akzeptieren Sie das Ende eines schwierigen Zyklus und suchen Sie nach neuen Anfängen."
    },
    { 
      name: "Page der Schwerter", 
      image: "/images/page_of_swords.jpg", 
      meaning: "Der Page der Schwerter symbolisiert Neugier, Intellekt und das Streben nach Wissen. Er zeigt, dass es wichtig ist, offen für neue Ideen zu sein.", 
      meditation: "Welche neuen Ideen und Konzepte sollte ich erkunden?", 
      tips: "Seien Sie neugierig und streben Sie nach Wissen und neuen Erkenntnissen."
    },
    { 
      name: "Ritter der Schwerter", 
      image: "/images/knight_of_swords.jpg", 
      meaning: "Der Ritter der Schwerter steht für Tatkraft, Entschlossenheit und schnelle Entscheidungen. Er zeigt, dass es wichtig ist, entschlossen und zielstrebig zu handeln.", 
      meditation: "Wie kann ich entschlossener handeln?", 
      tips: "Handeln Sie entschlossen und zielstrebig, um Ihre Ziele zu erreichen."
    },
    { 
      name: "Königin der Schwerter", 
      image: "/images/queen_of_swords.jpg", 
      meaning: "Die Königin der Schwerter symbolisiert Unabhängigkeit, Klarheit und Intellekt. Sie zeigt, dass es wichtig ist, klar und unabhängig zu denken.", 
      meditation: "Wie kann ich klarer und unabhängiger denken?", 
      tips: "Streben Sie nach Klarheit und Unabhängigkeit in Ihren Gedanken und Entscheidungen."
    },
    { 
      name: "König der Schwerter", 
      image: "/images/king_of_swords.jpg", 
      meaning: "Der König der Schwerter steht für Autorität, Logik und geistige Stärke. Er zeigt, dass es wichtig ist, logisch und autoritativ zu handeln.", 
      meditation: "Wie kann ich meine geistige Stärke und Autorität stärken?", 
      tips: "Nutzen Sie Ihre geistige Stärke und Logik, um autoritative Entscheidungen zu treffen."
    },
    // Münzen
    { 
      name: "Ass der Münzen", 
      image: "/images/ace_of_pentacles.jpg", 
      meaning: "Das Ass der Münzen steht für neue materielle Möglichkeiten, Wohlstand und praktische Anfänge. Es zeigt, dass neue Chancen bevorstehen.", 
      meditation: "Welche neuen materiellen Möglichkeiten sollte ich verfolgen?", 
      tips: "Nutzen Sie neue Chancen, um finanziellen und materiellen Wohlstand zu erlangen."
    },
    { 
      name: "Zwei der Münzen", 
      image: "/images/two_of_pentacles.jpg", 
      meaning: "Die Zwei der Münzen symbolisieren Balance, Anpassungsfähigkeit und Multitasking. Sie zeigen, dass Balance in allen Bereichen des Lebens wichtig ist.", 
      meditation: "Wie kann ich mehr Balance in mein Leben bringen?", 
      tips: "Streben Sie nach Ausgewogenheit und seien Sie flexibel in Ihrer Herangehensweise."
    },
    { 
      name: "Drei der Münzen", 
      image: "/images/three_of_pentacles.jpg", 
      meaning: "Die Drei der Münzen stehen für Teamarbeit, Zusammenarbeit und meisterhafte Fähigkeiten. Sie deuten auf erfolgreiche Zusammenarbeit hin.", 
      meditation: "Wie kann ich meine Zusammenarbeit mit anderen verbessern?", 
      tips: "Arbeiten Sie effektiv mit anderen zusammen und schätzen Sie die Fähigkeiten, die jeder mitbringt."
    },
    { 
      name: "Vier der Münzen", 
      image: "/images/four_of_pentacles.jpg", 
      meaning: "Die Vier der Münzen symbolisieren Besitz, Kontrolle und Zurückhaltung. Sie zeigen, dass es wichtig ist, eine Balance zwischen Sparen und Teilen zu finden.", 
      meditation: "Wie kann ich eine gesunde Balance zwischen Sparen und Teilen finden?", 
      tips: "Seien Sie vorsichtig mit Ihren Ressourcen, aber auch bereit zu teilen."
    },
    { 
      name: "Fünf der Münzen", 
      image: "/images/five_of_pentacles.jpg", 
      meaning: "Die Fünf der Münzen stehen für Armut, Verlust und Not. Sie zeigen, dass schwierige Zeiten bevorstehen könnten, aber auch, dass Hilfe verfügbar ist.", 
      meditation: "Wie kann ich mit meinen Ängsten vor Verlust und Not umgehen?", 
      tips: "Suchen Sie nach Unterstützung und bleiben Sie hoffnungsvoll, auch in schwierigen Zeiten."
    },
    { 
      name: "Sechs der Münzen", 
      image: "/images/six_of_pentacles.jpg", 
      meaning: "Die Sechs der Münzen symbolisieren Großzügigkeit, Geben und Nehmen. Sie zeigen, dass es wichtig ist, im Leben Ausgewogenheit zu finden.", 
      meditation: "Wie kann ich großzügiger und ausgeglichener sein?", 
      tips: "Seien Sie großzügig, aber achten Sie auch darauf, dass Sie selbst genug haben."
    },
    { 
      name: "Sieben der Münzen", 
      image: "/images/seven_of_pentacles.jpg", 
      meaning: "Die Sieben der Münzen stehen für Geduld, Investition und langfristige Planung. Sie zeigen, dass Ihre harte Arbeit Früchte tragen wird.", 
      meditation: "Welche langfristigen Ziele verfolge ich?", 
      tips: "Seien Sie geduldig und arbeiten Sie weiter an Ihren langfristigen Zielen."
    },
    { 
      name: "Acht der Münzen", 
      image: "/images/eight_of_pentacles.jpg", 
      meaning: "Die Acht der Münzen symbolisieren Fleiß, Handwerk und Hingabe. Sie zeigen, dass es wichtig ist, sich seiner Arbeit zu widmen.", 
      meditation: "Wie kann ich meine Fähigkeiten und mein Handwerk verbessern?", 
      tips: "Arbeiten Sie hart und widmen Sie sich der Verbesserung Ihrer Fähigkeiten."
    },
    { 
      name: "Neun der Münzen", 
      image: "/images/nine_of_pentacles.jpg", 
      meaning: "Die Neun der Münzen stehen für Unabhängigkeit, Luxus und Selbstgenügsamkeit. Sie zeigen, dass Ihre harte Arbeit sich ausgezahlt hat.", 
      meditation: "Wie kann ich meine Unabhängigkeit und meinen Wohlstand genießen?", 
      tips: "Genießen Sie die Früchte Ihrer Arbeit und seien Sie stolz auf Ihre Unabhängigkeit."
    },
    { 
      name: "Zehn der Münzen", 
      image: "/images/ten_of_pentacles.jpg", 
      meaning: "Die Zehn der Münzen symbolisieren Reichtum, Erbe und Familienglück. Sie zeigen, dass Sie auf eine stabile und wohlhabende Zukunft hinarbeiten.", 
      meditation: "Wie kann ich ein Erbe für zukünftige Generationen hinterlassen?", 
      tips: "Arbeiten Sie an einer stabilen und wohlhabenden Zukunft für sich und Ihre Familie."
    },
    { 
      name: "Page der Münzen", 
      image: "/images/page_of_pentacles.jpg", 
      meaning: "Der Page der Münzen symbolisiert Neugier, Lernen und neue finanzielle Chancen. Er zeigt, dass es wichtig ist, neue Fähigkeiten zu erlernen.", 
      meditation: "Welche neuen Fähigkeiten sollte ich erlernen?", 
      tips: "Seien Sie neugierig und offen für neue Lernmöglichkeiten."
    },
    { 
      name: "Ritter der Münzen", 
      image: "/images/knight_of_pentacles.jpg", 
      meaning: "Der Ritter der Münzen steht für Effizienz, Routine und harte Arbeit. Er zeigt, dass es wichtig ist, konsequent und fleißig zu sein.", 
      meditation: "Wie kann ich meine Effizienz und Arbeitsmoral verbessern?", 
      tips: "Arbeiten Sie hart und entwickeln Sie eine effektive Routine."
    },
    { 
      name: "Königin der Münzen", 
      image: "/images/queen_of_pentacles.jpg", 
      meaning: "Die Königin der Münzen symbolisiert Fürsorge, Wohlstand und praktische Fähigkeiten. Sie zeigt, dass es wichtig ist, für sich und andere zu sorgen.", 
      meditation: "Wie kann ich meine fürsorgliche Seite und meine praktischen Fähigkeiten stärken?", 
      tips: "Seien Sie fürsorglich und nutzen Sie Ihre praktischen Fähigkeiten, um Wohlstand zu schaffen."
    },
    { 
      name: "König der Münzen", 
      image: "/images/king_of_pentacles.jpg", 
      meaning: "Der König der Münzen steht für Erfolg, Wohlstand und finanzielle Sicherheit. Er zeigt, dass Ihre harte Arbeit zu Wohlstand geführt hat.", 
      meditation: "Wie kann ich meinen finanziellen Erfolg und meine Sicherheit aufrechterhalten?", 
      tips: "Nutzen Sie Ihre Ressourcen weise und arbeiten Sie daran, Ihren Wohlstand zu bewahren."
    }
  ];
  
  export default tarotkarten;
  