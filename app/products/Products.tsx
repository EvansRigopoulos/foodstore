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
      title: "Meats",
      items: [
        {
          name: "Grilled Chicken",
          description: "Juicy grilled chicken marinated with herbs.",
          price: "11",
        },
        {
          name: "Roast Chicken",
          description: "Tender roast chicken served with sides.",
          price: "$16",
        },
        {
          name: "Grilled Pork",
          description: "Delicious grilled pork with spices.",
          price: "$14",
        },
        {
          name: "Lamb",
          description: "Savory lamb cooked to perfection.",
          price: "$20",
        },
        {
          name: "Lamb Head",
          description: "A traditional delicacy.",
          price: "$25",
        },
        {
          name: "Kokoretsi",
          description: "Grilled lamb intestines with herbs.",
          price: "$18",
        },
      ],
    },
    {
      title: "Sides & Salads",
      items: [
        { name: "Fries", description: "Crispy golden fries.", price: "$5" },
        {
          name: "Greek Salad",
          description: "Fresh vegetables with feta cheese.",
          price: "$12",
        },
        {
          name: "Moussaka",
          description:
            "Traditional Greek dish with eggplant, meat, and bechamel sauce.",
          price: "$18",
        },
      ],
    },
    {
      title: "Drinks",
      items: [
        {
          name: "House Wine",
          description: "Refreshing red or white house wine.",
          price: "$8",
        },
        {
          name: "Greek Coffee",
          description: "Traditional Greek coffee served strong.",
          price: "$3",
        },
        {
          name: "Soft Drinks",
          description: "Coke, Sprite, Fanta, and more.",
          price: "$2",
        },
      ],
    },
  ],
  gr: [
    {
      title: "Κρέατα",
      items: [
        {
          name: "Κοτόπουλο Στη Σχάρα",
          description: "Ζουμερό κοτόπουλο στη σχάρα μαριναρισμένο με βότανα.",
          price: "15€",
        },
        {
          name: "Ροστό Κοτόπουλο",
          description: "Τρυφερό ροστό κοτόπουλο σερβιρισμένο με συνοδευτικά.",
          price: "16€",
        },
        {
          name: "Χοιρινό Στη Σχάρα",
          description: "Νόστιμο χοιρινό στη σχάρα με μπαχαρικά.",
          price: "14€",
        },
        {
          name: "Αρνί",
          description: "Νόστιμο αρνί μαγειρεμένο στην εντέλεια.",
          price: "20€",
        },
        {
          name: "Κεφαλή Αρνιού",
          description: "Μια παραδοσιακή λιχουδιά.",
          price: "25€",
        },
        {
          name: "Κοκορέτσι",
          description: "Χοιρινά εντόσθια στη σχάρα με βότανα.",
          price: "18€",
        },
      ],
    },
    {
      title: "Συνοδευτικά & Σαλάτες",
      items: [
        {
          name: "Πατάτες τηγανητές",
          description: "Κρίσιμες χρυσές τηγανητές πατάτες.",
          price: "5€",
        },
        {
          name: "Ελληνική Σαλάτα",
          description: "Φρέσκα λαχανικά με φέτα.",
          price: "12€",
        },
        {
          name: "Μουσακάς",
          description:
            "Παραδοσιακό ελληνικό πιάτο με μελιτζάνα, κρέας και μπεσαμέλ.",
          price: "18€",
        },
      ],
    },
    {
      title: "Ποτά",
      items: [
        {
          name: "Κρασί Σπιτίσιο",
          description: "Δροσερό κόκκινο ή λευκό κρασί.",
          price: "8€",
        },
        {
          name: "Ελληνικός Καφές",
          description: "Παραδοσιακός ελληνικός καφές σερβιρισμένος δυνατός.",
          price: "3€",
        },
        {
          name: "Αναψυκτικά",
          description: "Κόκα κόλα, Σπράιτ, Φanta και άλλα.",
          price: "2€",
        },
      ],
    },
  ],
};
