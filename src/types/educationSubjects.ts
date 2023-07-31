export enum EducationLevel {
    InternationalBaccalaureate = "ib",
    JuniorCollege = "jc",
    UpperSecondary = "upperSecondary",
    LowerSecondary = "lowerSecondary",
    Primary = "primary",
    undefined = "ud",
  }
  
  /**
   * Represents the stream for a secondary school level.
   */
  export enum SecondaryStream {
    InternationalBaccalaureate = "ib",
    IntegratedProgramme = "ip",
    Express = "exp",
    NormalAcademic = "na",
    NormalTechnical = "nt",
    undefined = "undefined"
  }
  
  export enum PrimarySubjects {
    English = "english_P",
    Math = "math_P",
    Science = "science_P",
    Chinese = "chinese_P",
    Malay = "malay_P",
    Tamil = "tamil_P",
    SocialStudies = "socialStudies_P"
  }
  
  export enum SecondarySubjects {
    English="English_S",
    EnglishLiterature="EnglishLiterature_S",
    Chinese="Chinese_S",
    Malay="Malay_S",
    Tamil="Tamil_S",
    EMath="EMath_S",
    AMath="AMath_S",
    Science="Science_S",
    CombinedSciencePhysics="CombinedSciencePhysics_S",
    CombinedScienceChemistry="CombinedScienceChemistry_S",
    CombinedScienceBiology="CombinedScienceBiology_S",
    Physics="Physics_S",
    Chemistry="Chemistry_S",
    Biology="Biology_S",
    CombinedHumanitiesSocialStudies="CombinedHumanitiesSocialStudies_S",
    CombinedHumanitiesGeography="CombinedHumanitiesGeography_S",
    CombinedHumanitiesHistory="CombinedHumanitiesHistory_S",
    CombinedHumanitiesLiterature="CombinedHumanitiesLiterature_S",
    Geography="Geography_S",
    History="History_S",
    SocialStudies="SocialStudies_S",
    Accounting="Accounting_S",
  }
  
  export enum JCSubjects {
    GeneralPaper="GeneralPaper_JC",
    KnowledgeAndInquiry="KnowledgeAndInquiry_JC",
    Chinese="Chinese_JC",
    Malay="Malay_JC",
    Tamil="Tamil_JC",
    H1Math="H1Math_JC",
    H2Math="H2Math_JC",
    H1Physics="H1Physics_JC",
    H2Physics="H2Physics_JC",
    H1Chemistry="H1Chemistry_JC",
    H2Chemistry="H2Chemistry_JC",
    H1Biology="H1Biology_JC",
    H2Biology="H2Biology_JC",
    H1Geography="H1Geography_JC",
    H2Geography="H2Geography_JC",
    H1History="H1History_JC",
    H2History="H2History_JC",
    H1EnglishLiterature="H1EnglishLiterature_JC",
    H2EnglishLiterature="H2EnglishLiterature_JC",
    H1Econs="H1Econs_JC",
    H2Econs="H2Econs_JC",
  }

  export enum IBSubjects {
    English="English_IB",
    Chinese="Chinese_IB",
    EnglishLiteratureSL="EnglishLiteratureSL_IB",
    HistorySL="HistorySL_IB",
    GeographySL="GeographySL_IB",
    EconomicsSL="EconomicsSL_IB",
    PhysicsSL="PhysicsSL_IB",
    ChemistrySL="ChemistrySL_IB",
    BiologySL="BiologySL_IB",
    MathSL="MathSL_IB",
    EnglishLiteratureHL="EnglishLiteratureHL_IB",
    HistoryHL="HistoryHL_IB",
    GeographyHL="GeographyHL_IB",
    EconomicsHL="EconomicsHL_IB",
    PhysicsHL="PhysicsHL_IB",
    ChemistryHL="ChemistryHL_IB",
    BiologyHL="BiologyHL_IB",
    MathHL="MathHL_IB",
  }  
  
  export const fancyPrimarySubjects = {
    "english_P": "English",
    "math_P": "Math",
    "science_P": "Science",
    "chinese_P": "Chinese",
    "malay_P": "Malay",
    "tamil_P": "Tamil",
    "socialStudies_P": "Social Studies"
  };

  export const fancySecondarySubjects = {
    "English_S": "English",
    "EnglishLiterature_S": "English Literature",
    "Chinese_S": "Chinese",
    "Malay_S": "Malay",
    "Tamil_S": "Tamil",
    "EMath_S": "E-Math",
    "AMath_S": "A-Math",
    "Science_S": "Science",
    "CombinedSciencePhysics_S": "Combined Science (Physics)",
    "CombinedScienceChemistry_S": "Combined Science (Chemistry)",
    "CombinedScienceBiology_S": "Combined Science (Biology)",
    "Physics_S": "Physics",
    "Chemistry_S": "Chemistry",
    "Biology_S": "Biology",
    "CombinedHumanitiesSocialStudies_S": "Combined Humanities (Social Studies)",
    "CombinedHumanitiesGeography_S": "Combined Humanities (Geography)",
    "CombinedHumanitiesHistory_S": "Combined Humanities (History)",
    "CombinedHumanitiesLiterature_S": "Combined Humanities (Literature)",
    "Geography_S": "Geography",
    "History_S": "History",
    "SocialStudies_S": "Social Studies",
    "Accounting_S": "Accounting"
  };

  export const fancyJcSubjects = {
    "GeneralPaper_JC": "General Paper",
    "KnowledgeAndInquiry_JC": "Knowledge and Inquiry",
    "Chinese_JC": "Chinese",
    "Malay_JC": "Malay",
    "Tamil_JC": "Tamil",
    "H1Math_JC": "H1 Math",
    "H2Math_JC": "H2 Math",
    "H1Physics_JC": "H1 Physics",
    "H2Physics_JC": "H2 Physics",
    "H1Chemistry_JC": "H1 Chemistry",
    "H2Chemistry_JC": "H2 Chemistry",
    "H1Biology_JC": "H1 Biology",
    "H2Biology_JC": "H2 Biology",
    "H1Geography_JC": "H1 Geography",
    "H2Geography_JC": "H2 Geography",
    "H1History_JC": "H1 History",
    "H2History_JC": "H2 History",
    "H1EnglishLiterature_JC": "H1 English Literature",
    "H2EnglishLiterature_JC": "H2 English Literature",
    "H1Econs_JC": "H1 Econs",
    "H2Econs_JC": "H2 Econs"
  };

  export const fancyIbSubjects = {
    "English_IB": "English",
    "Chinese_IB": "Chinese",
    "EnglishLiteratureSL_IB": "English Literature SL",
    "HistorySL_IB": "History SL",
    "GeographySL_IB": "Geography SL",
    "EconomicsSL_IB": "Economics SL",
    "PhysicsSL_IB": "Physics SL",
    "ChemistrySL_IB": "Chemistry SL",
    "BiologySL_IB": "Biology SL",
    "MathSL_IB": "Math SL",
    "EnglishLiteratureHL_IB": "English Literature HL",
    "HistoryHL_IB": "History HL",
    "GeographyHL_IB": "Geography HL",
    "EconomicsHL_IB": "Economics HL",
    "PhysicsHL_IB": "Physics HL",
    "ChemistryHL_IB": "Chemistry HL",
    "BiologyHL_IB": "Biology HL",
    "MathHL_IB": "Math HL"
  };
