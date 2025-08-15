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
          price: "10,60 €",
        },
        {
          name: "Rotisserie Chicken/with Lemon sauce",
          description: "Slow-roasted chicken with lemon",
          price: "10,60 €",
        },
        {
          name: "Kontosouvli (traditional Greek slow roasted pork)",
          description: "Traditional Greek slow roasted pork",
          price: "22,00 €",
        },
        {
          name: "Roasted Pork with bones and skin",
          description: "Traditional roasted pork",
          price: "19,50 €",
        },
        {
          name: "Kokoretsi* (Traditional Greek lamb intestines and giblets)",
          description: "Traditional Greek delicacy",
          price: "24,90 €",
        },
        {
          name: "Lamb Shoulder",
          description: "Tender lamb shoulder",
          price: "25,50 €",
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
          name: "Mustard sauce",
          description: "Creamy mustard",
          price: "2,50 €",
        },
        {
          name: "Yogurt sauce",
          description: "Υogurt sauce",
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
          description:
            "Ολόκληρο μαριναρισμένο κοτόπουλο ψημένο στη σχάρα.Τελικό βάρος ≈ 1,300kg",
          price: "10,60 €",
        },
        {
          name: "Κοτόπουλο Σούβλας/Λεμονάτο",
          description:
            "Ζουμερό κοτόπουλο σιγοψημένο  στη σούβλα.Τελικο βάρος ≈ 1,300kg",
          price: "10,60 €",
        },
        {
          name: "Κοντοσούβλι Χοιρινό",
          description: "Τρυφερά κομμάτια χοιρινού περασμένα στη σούβλα",
          price: "22,00 €",
        },
        {
          name: "Γουρουνοπούλα",
          description: "Χοιρινό με τραγανή πέτσα και κόκκαλο",
          price: "19,50 €",
        },
        {
          name: "Κοκορέτσι*",
          description: "Το παραδοσιακό....",
          price: "24,90 €",
        },
        {
          name: "Αρνί (Χεράκι)",
          description: "Χερακι αρνίσιο.Τελικό βάρος ≈ 1,200kg",
          price: "25,50 €",
        },
        {
          name: "Κεφαλάκια* (το τεμάχιο)",
          description: "",
          price: "3,00 €",
        },
      ],
    },
    {
      title: "Ορεκτικά",
      items: [
        {
          name: "Πατάτες τηγανητές*",
          description: "",
          price: "3,00 €",
        },
        {
          name: "Κοτομπουκιές* (8 τεμάχια)",
          description: "",
          price: "7,00 €",
        },
        {
          name: "Sticks Μοτσαρέλας* (8 τεμάχια)",
          description: "",
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
          name: "Σως Μουστάρδας",
          description: "Η κλασική... Μαγιονεζα-Μουστάρδα",
          price: "2,50 €",
        },
        {
          name: "Σως Γιαουρτιου",
          description: "",
          price: "2,50 €",
        },
        {
          name: "Σως Cheddar / Σως Barbeque",
          description: "Οι γνωστές....",
          price: "2,50 €",
        },
        {
          name: "Ρώσικη",
          description: "",
          price: "2,50 €",
        },
        {
          name: "Τυροσαλάτα",
          description: "",
          price: "2,50 €",
        },
        {
          name: "Τυροκαυτερή",
          description: "Ελαφρώς πικάντικη",
          price: "2,50 €",
        },
        {
          name: "Μελιτζανοσαλάτα",
          description: "Παραδοσιακή μελιτζανοσαλάτα",
          price: "2,50 €",
        },
        {
          name: "Κηπουρού",
          description: "",
          price: "2,50 €",
        },
        {
          name: "Βουδαπέστης",
          description: "",
          price: "2,50 €",
        },
        {
          name: "Φέτα (200 gr)",
          description: "Φέτα Ηπείρου 200γρ",
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
          price: "5,50 €",
        },
      ],
    },
    {
      title: "Αναψυκτικά",
      items: [
        {
          name: "Coca cola / light/zero (330ml)",
          description: "",
          price: "1,50 €",
        },
        {
          name: "Fanta / Fanta μπλε (330ml)",
          description: "",
          price: "1,50 €",
        },
        {
          name: "Sprite (330ml)",
          description: "",
          price: "1,50 €",
        },
        {
          name: "Schweppes Σόδα (330ml)",
          description: "",
          price: "1,50 €",
        },
        {
          name: "Σουρωτή (330ml)",
          description: "",
          price: "1,50 €",
        },
        {
          name: "Coca cola / light / zero (500ml)",
          description: "",
          price: "1,70 €",
        },
        {
          name: "Coca cola/light/zero (1.5lt)",
          description: "",
          price: "3,00 €",
        },
        {
          name: "Fanta (1.5lt)",
          description: "",
          price: "3,00 €",
        },
        {
          name: "Sprite (1.5lt)",
          description: "",
          price: "3,00 €",
        },
        {
          name: "Νερό μικρό (0,5 lt)",
          description: "",
          price: "0,50 €",
        },
        {
          name: "Νερό μεγάλο (1,5 lt)",
          description: "",
          price: "1,00 €",
        },
      ],
    },
    {
      title: "Βίκος",
      items: [
        {
          name: "Cola (330ml)",
          description: "",
          price: "1,30 €",
        },
        {
          name: "Πορτοκαλάδα (330ml)",
          description: "",
          price: "1,30 €",
        },
        {
          name: "Πορτοκαλάδα χωρίς ανθρακικό (330ml)",
          description: "",
          price: "1,30 €",
        },
        {
          name: "Γκαζόζα (330ml)",
          description: "",
          price: "1,30 €",
        },
        {
          name: "Λεμονάδα (330ml)",
          description: "",
          price: "1,30 €",
        },
        {
          name: "Σόδα (330ml)",
          description: "",
          price: "1,30 €",
        },
        {
          name: "Cola (1lt)",
          description: "",
          price: "2,80 €",
        },
        {
          name: "Πορτοκαλάδα (1lt)",
          description: "",
          price: "2,80 €",
        },
        {
          name: "Πορτοκαλάδα χωρίς ανθρακικό (1lt)",
          description: "",
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
          price: "4,50 €",
        },
        {
          name: "Ζίτσας Ιωαννίνων Λευκό-Ροζέ-Κόκκινο (Ξηρό) 1/2 lt",
          description: "Κρασί από την περιοχή Ιωαννίνων",
          price: "5,50 €",
        },
        {
          name: "Λευκό - Ροζέ - Κόκκινο (Ξηρό) 500 ml",
          description: "Επιλογή κρασιών",
          price: "2,00 €",
        },
      ],
    },
    {
      title: "Ποτά",
      items: [
        {
          name: "Βολταράκι Τσικουδιά 500 ml",
          description: "Παραδοσιακό κρητικό ποτό",
          price: "6,50 €",
        },
        {
          name: "ZOINOS Τσίπουρο 200 ml",
          description: "Εκλεκτό ελληνικό τσίπουρο",
          price: "5,50 €",
        },
      ],
    },
  ],
};
