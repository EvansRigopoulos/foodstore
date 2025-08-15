type MenuItem = {
  name: string;
  description: string;
  price: string;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

type LanguageMenuSections = {
  en: MenuSection[];
  gr: MenuSection[];
};

export const Products: LanguageMenuSections = {
  en: [
    {
      title: "Per Kilo",
      items: [
        {
          name: "Grilled Chicken/with lemon sauce",
          description: "Tender grilled chicken with lemon",
          price: "10,20 €",
        },
        {
          name: "Rotisserie Chicken/with Lemon sauce",
          description: "Slow-roasted chicken with lemon",
          price: "10,20 €",
        },
        {
          name: "Kontosouvli (traditional Greek slow roasted pork)",
          description: "Traditional Greek slow roasted pork",
          price: "21,90 €",
        },
        {
          name: "Roasted Pork with bones and skin",
          description: "Traditional roasted pork",
          price: "18,50 €",
        },
        {
          name: "Kokoretsi* (Traditional Greek lamb intestines and giblets)",
          description: "Traditional Greek delicacy",
          price: "24,50 €",
        },
        {
          name: "Lamb Shoulder",
          description: "Tender lamb shoulder",
          price: "24,50 €",
        },
        {
          name: "Lamb Head* (pcs)",
          description: "Traditional lamb head per piece",
          price: "3,00 €",
        },
      ],
    },
    {
      title: "Appetizers",
      items: [
        {
          name: "French fries*",
          description: "Crispy golden fries",
          price: "3,00 €",
        },
        {
          name: "Chicken nuggets* (8 pcs)",
          description: "Crispy chicken nuggets",
          price: "7,00 €",
        },
        {
          name: "Mozzarella sticks* (8pcs)",
          description: "Crispy mozzarella sticks",
          price: "6,00 €",
        },
      ],
    },
    {
      title: "Sauce/dips (150 gr)",
      items: [
        {
          name: "Tzatziki",
          description: "Traditional Greek yogurt dip",
          price: "2,50 €",
        },
        {
          name: "Mustard sauce/Yogurt sauce",
          description: "Creamy mustard or yogurt sauce",
          price: "2,50 €",
        },
        {
          name: "Cheddar sauce/Barbeque sauce",
          description: "Rich cheddar or BBQ sauce",
          price: "2,50 €",
        },
        {
          name: "Russian salad",
          description: "Traditional Russian potato salad",
          price: "2,50 €",
        },
        {
          name: "Creamy Cheese salad",
          description: "Rich and creamy cheese salad",
          price: "2,50 €",
        },
        {
          name: "Spicy creamy cheese salad",
          description: "Spicy version of cheese salad",
          price: "2,50 €",
        },
        {
          name: "Aubergine salad",
          description: "Traditional eggplant salad",
          price: "2,50 €",
        },
        {
          name: "Farmer's salad (chopped vegetables, mayo)",
          description: "Fresh chopped vegetables with mayo",
          price: "2,50 €",
        },
        {
          name: "Budapest salad (chopped vegetables, mayo, ham)",
          description: "Hearty salad with ham",
          price: "2,50 €",
        },
        {
          name: "Feta (200 gr)",
          description: "Traditional Greek feta cheese",
          price: "3,50 €",
        },
        {
          name: "Bread",
          description: "Fresh bread",
          price: "1,60 €",
        },
      ],
    },
    {
      title: "Salads",
      items: [
        {
          name: "Tomato and cucumber salad",
          description: "Cucumber, tomato, pepper",
          price: "4,00 €",
        },
        {
          name: "Mixed salad (Cabbage, red cabbage and carrot)",
          description: "Fresh mixed vegetables",
          price: "3,50 €",
        },
        {
          name: "To Diamanti",
          description:
            "Lettuce, arugula, cherry tomatoes and honey-mustard sauce",
          price: "5,00 €",
        },
      ],
    },
    {
      title: "Refreshments",
      items: [
        {
          name: "Coca cola / light/zero (330ml)",
          description: "Classic Coca Cola",
          price: "1,50 €",
        },
        {
          name: "Fanta / Fanta blue (330ml)",
          description: "Orange or blue Fanta",
          price: "1,50 €",
        },
        {
          name: "Sprite (330ml)",
          description: "Lemon-lime soda",
          price: "1,50 €",
        },
        {
          name: "Schweppes Soda (330ml)",
          description: "Classic soda water",
          price: "1,50 €",
        },
        {
          name: "Sparkling water (330ml)",
          description: "Refreshing sparkling water",
          price: "1,50 €",
        },
        {
          name: "Coca cola / light / zero (500ml)",
          description: "Large Coca Cola",
          price: "1,70 €",
        },
        {
          name: "Coca cola/light/zero (1.5lt)",
          description: "Family size Coca Cola",
          price: "3,00 €",
        },
        {
          name: "Fanta (1.5lt)",
          description: "Family size Fanta",
          price: "3,00 €",
        },
        {
          name: "Sprite (1.5lt)",
          description: "Family size Sprite",
          price: "3,00 €",
        },
        {
          name: "Water 0,5 lt",
          description: "Small water bottle",
          price: "0,50 €",
        },
        {
          name: "Water 1,5 lt",
          description: "Large water bottle",
          price: "1,00 €",
        },
      ],
    },
    {
      title: "Vikos Drinks",
      items: [
        {
          name: "Cola (330ml)",
          description: "Vikos cola",
          price: "1,30 €",
        },
        {
          name: "Orange (330ml)",
          description: "Orange soda",
          price: "1,30 €",
        },
        {
          name: "Orange without carbonation (330ml)",
          description: "Still orange drink",
          price: "1,30 €",
        },
        {
          name: "Gazoza (330ml)",
          description: "Traditional Greek soda",
          price: "1,30 €",
        },
        {
          name: "Lemonade (330ml)",
          description: "Fresh lemonade",
          price: "1,30 €",
        },
        {
          name: "Soda (330ml)",
          description: "Plain soda water",
          price: "1,30 €",
        },
        {
          name: "Cola (1lt)",
          description: "Large Vikos cola",
          price: "2,80 €",
        },
        {
          name: "Orange (1lt)",
          description: "Large orange soda",
          price: "2,80 €",
        },
        {
          name: "Orange without carbonation (1lt)",
          description: "Large still orange drink",
          price: "2,80 €",
        },
      ],
    },
    {
      title: "Beers (330ml)",
      items: [
        {
          name: "Kaiser",
          description: "Premium Austrian beer",
          price: "1,90 €",
        },
        {
          name: "Fischer",
          description: "French premium beer",
          price: "1,90 €",
        },
        {
          name: "Heineken",
          description: "Dutch premium lager",
          price: "1,90 €",
        },
        {
          name: "Eza pilsner",
          description: "Greek pilsner beer",
          price: "1,90 €",
        },
        {
          name: "Amstel",
          description: "Dutch lager beer",
          price: "1,70 €",
        },
        {
          name: "Alfa",
          description: "Greek beer",
          price: "1,70 €",
        },
        {
          name: "Fix",
          description: "Greek classic beer",
          price: "1,70 €",
        },
        {
          name: "Eza lager",
          description: "Greek lager beer",
          price: "1,70 €",
        },
        {
          name: "Fix no alcohol",
          description: "Non-alcoholic beer",
          price: "1,70 €",
        },
      ],
    },
    {
      title: "Wines",
      items: [
        {
          name: "Giatsa Tyrnavou White-Rose (Semi dry) 1 lt",
          description: "Local wine from Tyrnavos",
          price: "4,00 €",
        },
        {
          name: "Zitsas Ioanninon White-Rose-Red (Dry) 1/2 lt",
          description: "Wine from Ioannina region",
          price: "5,00 €",
        },
        {
          name: "White-Rose-Red (Dry) 500 ml",
          description: "House wine selection",
          price: "2,40 €",
        },
      ],
    },
    {
      title: "Drinks",
      items: [
        {
          name: "Voltaraki Tsikoudia 500ml",
          description: "Traditional Cretan spirit",
          price: "6,00 €",
        },
        {
          name: "ZOINOS Tsipouro 200ml",
          description: "Premium Greek tsipouro",
          price: "5,00 €",
        },
      ],
    },
  ],
  gr: [
    {
      title: "Με το κιλό",
      items: [
        {
          name: "Κοτόπουλο Σχάρας/Λεμονάτο",
          description: "Ζουμερό κοτόπουλο στη σχάρα με λεμόνι",
          price: "10,20 €",
        },
        {
          name: "Κοτόπουλο Σούβλας/Λεμονάτο",
          description: "Κοτόπουλο σούβλας με λεμόνι",
          price: "10,20 €",
        },
        {
          name: "Κοντοσούβλι Χοιρινό",
          description: "Παραδοσιακό χοιρινό κοντοσούβλι",
          price: "21,90 €",
        },
        {
          name: "Γουρουνοπούλα",
          description: "Γουρουνοπούλα με κόκκαλα και πέτσα",
          price: "18,50 €",
        },
        {
          name: "Κοκορέτσι*",
          description: "Παραδοσιακό κοκορέτσι αρνίσιο",
          price: "24,50 €",
        },
        {
          name: "Αρνί (Χεράκι)",
          description: "Τρυφερό αρνίσιο χεράκι",
          price: "24,50 €",
        },
        {
          name: "Κεφαλάκια* (το τεμάχιο)",
          description: "Παραδοσιακά κεφαλάκια αρνίσια",
          price: "3,00 €",
        },
      ],
    },
    {
      title: "Ορεκτικά",
      items: [
        {
          name: "Πατάτες τηγανητές*",
          description: "Τραγανές χρυσαφένιες πατάτες",
          price: "3,00 €",
        },
        {
          name: "Κοτομπουκιές* (8 τεμάχια)",
          description: "Τραγανές κοτομπουκιές",
          price: "7,00 €",
        },
        {
          name: "Sticks Μοτσαρέλας* (8 τεμάχια)",
          description: "Τραγανά sticks μοτσαρέλας",
          price: "6,00 €",
        },
      ],
    },
    {
      title: "Συνοδευτικά (150 gr)",
      items: [
        {
          name: "Τζατζίκι",
          description: "Παραδοσιακό ελληνικό τζατζίκι",
          price: "2,50 €",
        },
        {
          name: "Σως Μουστάρδας / Σως Γιαουρτιού",
          description: "Κρεμώδης σάλτσα μουστάρδας ή γιαουρτιού",
          price: "2,50 €",
        },
        {
          name: "Σως Cheddar / Σως Barbeque",
          description: "Πλούσια σάλτσα cheddar ή BBQ",
          price: "2,50 €",
        },
        {
          name: "Ρώσικη",
          description: "Παραδοσιακή ρώσικη σαλάτα",
          price: "2,50 €",
        },
        {
          name: "Τυροσαλάτα",
          description: "Πλούσια και κρεμώδης τυροσαλάτα",
          price: "2,50 €",
        },
        {
          name: "Τυροκαυτερή",
          description: "Πικάντικη τυροσαλάτα",
          price: "2,50 €",
        },
        {
          name: "Μελιτζανοσαλάτα",
          description: "Παραδοσιακή μελιτζανοσαλάτα",
          price: "2,50 €",
        },
        {
          name: "Κηπουρού",
          description: "Φρέσκα κομμένα λαχανικά με μαγιονέζα",
          price: "2,50 €",
        },
        {
          name: "Βουδαπέστης",
          description: "Κομμένα λαχανικά με μαγιονέζα και ζαμπόν",
          price: "2,50 €",
        },
        {
          name: "Φέτα (200 gr)",
          description: "Παραδοσιακή ελληνική φέτα",
          price: "3,50 €",
        },
        {
          name: "Ψωμί",
          description: "Φρέσκο ψωμί",
          price: "1,60 €",
        },
      ],
    },
    {
      title: "Σαλάτες",
      items: [
        {
          name: "Αγγουροντομάτα",
          description: "Αγγούρι - Ντομάτα - Πιπεριά",
          price: "4,00 €",
        },
        {
          name: "Ανάμεικτη",
          description: "Λάχανο-Κόκκινο λάχανο-Καρότο",
          price: "3,50 €",
        },
        {
          name: "Το Διαμάντι",
          description: "Μαρούλι-Ρόκα-Ντοματίνια-Σως μέλι-μουστάρδα",
          price: "5,00 €",
        },
      ],
    },
    {
      title: "Αναψυκτικά",
      items: [
        {
          name: "Coca cola / light/zero (330ml)",
          description: "Κλασική Κόκα Κόλα",
          price: "1,50 €",
        },
        {
          name: "Fanta / Fanta μπλε (330ml)",
          description: "Πορτοκαλάδα ή μπλε Φάντα",
          price: "1,50 €",
        },
        {
          name: "Sprite (330ml)",
          description: "Λεμονάδα με ανθρακικό",
          price: "1,50 €",
        },
        {
          name: "Schweppes Σόδα (330ml)",
          description: "Κλασική σόδα",
          price: "1,50 €",
        },
        {
          name: "Σουρωτή (330ml)",
          description: "Δροσερό ανθρακούχο νερό",
          price: "1,50 €",
        },
        {
          name: "Coca cola / light / zero (500ml)",
          description: "Μεγάλη Κόκα Κόλα",
          price: "1,70 €",
        },
        {
          name: "Coca cola/light/zero (1.5lt)",
          description: "Οικογενειακό μέγεθος Κόκα Κόλα",
          price: "3,00 €",
        },
        {
          name: "Fanta (1.5lt)",
          description: "Οικογενειακό μέγεθος Φάντα",
          price: "3,00 €",
        },
        {
          name: "Sprite (1.5lt)",
          description: "Οικογενειακό μέγεθος Σπράιτ",
          price: "3,00 €",
        },
        {
          name: "Νερό μικρό (0,5 lt)",
          description: "Μικρό μπουκάλι νερό",
          price: "0,50 €",
        },
        {
          name: "Νερό μεγάλο (1,5 lt)",
          description: "Μεγάλο μπουκάλι νερό",
          price: "1,00 €",
        },
      ],
    },
    {
      title: "Βίκος",
      items: [
        {
          name: "Cola (330ml)",
          description: "Βίκος κόλα",
          price: "1,30 €",
        },
        {
          name: "Πορτοκαλάδα (330ml)",
          description: "Πορτοκαλάδα Βίκος",
          price: "1,30 €",
        },
        {
          name: "Πορτοκαλάδα χωρίς ανθρακικό (330ml)",
          description: "Φυσική πορτοκαλάδα",
          price: "1,30 €",
        },
        {
          name: "Γκαζόζα (330ml)",
          description: "Παραδοσιακή ελληνική γκαζόζα",
          price: "1,30 €",
        },
        {
          name: "Λεμονάδα (330ml)",
          description: "Φρέσκια λεμονάδα",
          price: "1,30 €",
        },
        {
          name: "Σόδα (330ml)",
          description: "Απλή σόδα",
          price: "1,30 €",
        },
        {
          name: "Cola (1lt)",
          description: "Μεγάλη Βίκος κόλα",
          price: "2,80 €",
        },
        {
          name: "Πορτοκαλάδα (1lt)",
          description: "Μεγάλη πορτοκαλάδα",
          price: "2,80 €",
        },
        {
          name: "Πορτοκαλάδα χωρίς ανθρακικό (1lt)",
          description: "Μεγάλη φυσική πορτοκαλάδα",
          price: "2,80 €",
        },
      ],
    },
    {
      title: "Μπύρες (330ml)",
      items: [
        {
          name: "Kaiser",
          description: "Αυστριακή premium μπίρα",
          price: "1,90 €",
        },
        {
          name: "Fischer",
          description: "Γαλλική premium μπίρα",
          price: "1,90 €",
        },
        {
          name: "Heineken",
          description: "Ολλανδική premium lager",
          price: "1,90 €",
        },
        {
          name: "Eza pilsner",
          description: "Ελληνική pilsner μπίρα",
          price: "1,90 €",
        },
        {
          name: "Amstel",
          description: "Ολλανδική lager μπίρα",
          price: "1,70 €",
        },
        {
          name: "Alfa",
          description: "Ελληνική μπίρα",
          price: "1,70 €",
        },
        {
          name: "Fix",
          description: "Κλασική ελληνική μπίρα",
          price: "1,70 €",
        },
        {
          name: "Eza lager",
          description: "Ελληνική lager μπίρα",
          price: "1,70 €",
        },
        {
          name: "Fix άνευ",
          description: "Μπίρα χωρίς αλκοόλ",
          price: "1,70 €",
        },
      ],
    },
    {
      title: "Κρασιά",
      items: [
        {
          name: "Γιάτσα Τυρνάβου Λευκό-Ροζέ (Ημίξηρο) 1 lt",
          description: "Τοπικό κρασί από τον Τύρναβο",
          price: "4,00 €",
        },
        {
          name: "Ζίτσας Ιωαννίνων Λευκό-Ροζέ-Κόκκινο (Ξηρό) 1/2 lt",
          description: "Κρασί από την περιοχή Ιωαννίνων",
          price: "5,00 €",
        },
        {
          name: "Λευκό - Ροζέ - Κόκκινο (Ξηρό) 500 ml",
          description: "Επιλογή κρασιών",
          price: "2,40 €",
        },
      ],
    },
    {
      title: "Ποτά",
      items: [
        {
          name: "Βολταράκι Τσικουδιά 500 ml",
          description: "Παραδοσιακό κρητικό ποτό",
          price: "6,00 €",
        },
        {
          name: "ZOINOS Τσίπουρο 200 ml",
          description: "Εκλεκτό ελληνικό τσίπουρο",
          price: "5,00 €",
        },
      ],
    },
  ],
};
