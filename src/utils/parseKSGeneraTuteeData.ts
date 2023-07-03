// @ts-nocheck
import { GSheetsResponse, GSheetsData } from '@/types/google-sheets'
import {
    Tutee,
    Gender,
    PreferedGender,
    Subject,
  } from '@/types/person'
  import {
    EducationLevel,
    SecondaryStream,
    PrimarySubjects,
    SecondarySubjects,
    JCSubjects,
    IBSubjects,
  } from '@/types/educationSubjects'
  import { stringToArray } from '.'

  const primarySubjectTextToEnumMapping = {
    "english language": PrimarySubjects.English,
    "mathematics": PrimarySubjects.Math,
    "science": PrimarySubjects.Science,
    "chinese language": PrimarySubjects.Chinese,
    "malay language": PrimarySubjects.Malay,
    "tamil language": PrimarySubjects.Tamil,
    "social studies": PrimarySubjects.SocialStudies
  }
  const secondarySubjectTextToEnumMapping = {
    "english language": SecondarySubjects.English,
    "chinese language": SecondarySubjects.Chinese,
    "malay language": SecondarySubjects.Malay,
    "tamil language": SecondarySubjects.Tamil,
    "mathematics": SecondarySubjects.EMath,
    "a-mathematics": SecondarySubjects.AMath,
    "principle of accounting": SecondarySubjects.Accounting,
    "physics": SecondarySubjects.Physics,
    "biology": SecondarySubjects.Biology,
    "chemistry": SecondarySubjects.Chemistry,
    "combined science (biology)": SecondarySubjects.CombinedScienceBiology,
    "combined science (chemistry)": SecondarySubjects.CombinedScienceChemistry,
    "combined science (physics)": SecondarySubjects.CombinedSciencePhysics,
    "geography": SecondarySubjects.Geography,
    "history": SecondarySubjects.History,
    "english literature": SecondarySubjects.EnglishLiterature,
    "social studies": SecondarySubjects.SocialStudies,
    "combined humanities (social studies)":SecondarySubjects.CombinedHumanitiesSocialStudies,
    "combined humanities (geography)":SecondarySubjects.CombinedHumanitiesGeography,
    "combined humanities (history)":SecondarySubjects.CombinedHumanitiesHistory,
    "combined humanities (literature)":SecondarySubjects.CombinedHumanitiesLiterature,
  }
  const jcSubjectTextToEnumMapping = {
    "general paper (gp)": JCSubjects.GeneralPaper,
    "knowledge & inquiry (ki)": JCSubjects.KnowledgeAndInquiry,
    "chinese language": JCSubjects.Chinese,
    "malay language": JCSubjects.Malay,
    "tamil language": JCSubjects.Tamil,
    "h1 mathematics": JCSubjects.H1Math,
    "h2 mathematics": JCSubjects.H2Math,
    "h1 physics": JCSubjects.H1Physics,
    "h2 physics": JCSubjects.H2Physics,
    "h1 chemistry": JCSubjects.H1Chemistry,
    "h2 chemistry": JCSubjects.H2Chemistry,
    "h1 biology": JCSubjects.H1Biology,
    "h2 biology": JCSubjects.H2Biology,
    "h1 geography": JCSubjects.H1Geography,
    "h2 geography": JCSubjects.H2Geography,
    "h1 history": JCSubjects.H1History,
    "h2 history": JCSubjects.H2History,
    "h1 english literature": JCSubjects.H1EnglishLiterature,
    "h2 english literature": JCSubjects.H2EnglishLiterature,
    "h1 economics": JCSubjects.H1Econs,
    "h2 economics": JCSubjects.H2Econs,
  }
  const ibSubjectTextToEnumMapping = {
    "english language": IBSubjects.English,
    "chinese language": IBSubjects.Chinese,
    "mathematics": IBSubjects.MathSL,
    "geography": IBSubjects.GeographySL,
    "history": IBSubjects.HistorySL,
    "english literature": IBSubjects.EnglishLiteratureSL,
    "economics":IBSubjects.EconomicsSL,
    "biology": IBSubjects.BiologySL,
    "physics": IBSubjects.PhysicsSL,
    "chemistry": IBSubjects.ChemistrySL,
    "mathematics (sl)": IBSubjects.MathSL,
    "geography (sl)": IBSubjects.GeographySL,
    "history (sl)": IBSubjects.HistorySL,
    "english literature (sl)": IBSubjects.EnglishLiteratureSL,
    "economics (sl)":IBSubjects.EconomicsSL,
    "biology (sl)": IBSubjects.BiologySL,
    "physics (sl)": IBSubjects.PhysicsSL,
    "chemistry (sl)": IBSubjects.ChemistrySL,
    "mathematics (hl)": IBSubjects.MathSL,
    "geography (hl)": IBSubjects.GeographySL,
    "history (hl)": IBSubjects.HistorySL,
    "english literature (hl)": IBSubjects.EnglishLiteratureSL,
    "economics (hl)": IBSubjects.EconomicsSL,
    "biology (hl)": IBSubjects.BiologySL,
    "physics (hl)": IBSubjects.PhysicsSL,
    "chemistry (hl)": IBSubjects.ChemistryHL
  }
  const educationLevelMapping = {
    "primary 1":EducationLevel.Primary,
    "primary 2":EducationLevel.Primary,
    "primary 3":EducationLevel.Primary,
    "primary 4":EducationLevel.Primary,
    "primary 5":EducationLevel.Primary,
    "primary 6":EducationLevel.Primary,
    "secondary 1": EducationLevel.LowerSecondary,
    "secondary 2": EducationLevel.LowerSecondary,
    "secondary 3": EducationLevel.LowerSecondary,
    "secondary 4": EducationLevel.UpperSecondary,
    "secondary 5": EducationLevel.UpperSecondary,
    "junior college (jc) 1": EducationLevel.JuniorCollege,
    "junior college (jc) 2": EducationLevel.JuniorCollege,
    "international baccalaureate (ib) grade 11": EducationLevel.InternationalBaccalaureate,
    "international baccalaureate (ib) grade 12": EducationLevel.InternationalBaccalaureate,
  }
  const streamMapping = {
    "express": SecondaryStream.Express,
    "normal academic (na)": SecondaryStream.NormalAcademic,
    "normal technical (nt)": SecondaryStream.NormalTechnical,
    "integrated program (ip)": SecondaryStream.IntegratedProgramme,
    "international baccalaureate (ib)": SecondaryStream.InternationalBaccalaureate
  }

const findIdxKSGeneralTutee = (colNames : string[]) => {
    const tuteeIndexIdx = colNames.findIndex(
        (colName: string) =>
          colName.toLowerCase().includes('tutee') &&
          colName.toLowerCase().includes('index')
      )
      const tuteeNameIdx = colNames.findIndex((colName: string) =>
        colName.toLowerCase().includes('name')
      )
      const contactNumIdx = colNames.findIndex((colName: string) =>
        colName.toLowerCase().includes('phone')
      )
      const genderIdx = colNames.findIndex(
        (colName: string) =>
          colName.toLowerCase().includes('gender') &&
          !colName.toLowerCase().includes('?')
      )
      const genderPrefIdx = colNames.findIndex((colName: string) =>
        colName.toLowerCase().includes('gender?')
      )
      const financialAidIdx = colNames.findIndex((colName: string) =>
        colName.toLowerCase().includes('financial aid')
      )
      const educationLevelIdx = colNames.findIndex(
        (colName: string) =>
          colName.toLowerCase().includes('level') &&
          colName.toLowerCase().includes('education') &&
          colName.toLowerCase().includes('2023')
      )
      const educationLevelIdxArr: number[] = []
      colNames.forEach((colName: string, idx: number) => {
        if (colName.toLowerCase().includes('level of education')) {
          educationLevelIdxArr.push(idx)
        }
      })
      const streamIdx = colNames.findIndex((colName: string) =>
        colName.toLowerCase().includes('stream')
      )
      const subjIdx = colNames.findIndex((colName: string) =>
        colName.toLowerCase().includes('subject')
      )
      const subjIdxArr: number[] = []
      colNames.forEach((colName: string, idx: number) => {
        if (colName.toLowerCase().includes('subject')) {
          subjIdxArr.push(idx)
        }
      })     

    if (
        tuteeIndexIdx < 0 ||
        tuteeNameIdx < 0 ||
        genderIdx < 0 ||
        genderPrefIdx < 0 ||
        educationLevelIdx < 0 ||
        streamIdx < 0 ||
        subjIdx < 0
    ) {
        alert('Tutee DB column name inaccurate! Tutee Data not loaded ')
        return
    }
        return {
            personalData: {
                index: tuteeIndexIdx,
                name: tuteeNameIdx,
                gender: genderIdx,
                contact: {
                    phone:contactNumIdx
                }
            },
            PreferedGender: genderPrefIdx,
            isOnFinancialAid: financialAidIdx,
            EducationLevel: educationLevelIdxArr,
            secondaryStream: streamIdx,
            subjects:subjIdxArr        
       }
}
const parseGender = (gender: string) : Gender | undefined => {
    gender = gender.toLowerCase()
    if (gender.includes("female")) return Gender.Female
    if (gender.includes("male")) return Gender.Male
    return undefined
  }

const parseGenderPreference = (
    rawGenderPreference: string
  ): PreferedGender => {
    if (rawGenderPreference.includes('female')) return PreferedGender.Female
    if (rawGenderPreference.includes('male')) return PreferedGender.Male
    return PreferedGender.None
  }

  const parseFinancialAidStatus = (onFinAid: string): boolean|undefined=> {
    onFinAid = onFinAid.toLowerCase()
    if (onFinAid.includes("yes")) return true
    if (onFinAid.includes("no")) return false
    return undefined
  }

  const parseEducationLevel = (levelArr: string[]): EducationLevel => {
    const parsedEducationLevelArr = levelArr.map((level)=>educationLevelMapping[level.trim().toLowerCase()])
    if (parsedEducationLevelArr.includes(EducationLevel.JuniorCollege)) return EducationLevel.JuniorCollege
    if (parsedEducationLevelArr.includes(EducationLevel.InternationalBaccalaureate)) return EducationLevel.InternationalBaccalaureate
    if (parsedEducationLevelArr.includes(EducationLevel.UpperSecondary)) return EducationLevel.UpperSecondary
    if (parsedEducationLevelArr.includes(EducationLevel.LowerSecondary)) return EducationLevel.LowerSecondary
    if (parsedEducationLevelArr.includes(EducationLevel.Primary)) return EducationLevel.Primary
    return EducationLevel.undefined
  }
  const parseStream = (stream: string): SecondaryStream => {
    stream = stream.toLowerCase()
    if (streamMapping[stream]) return streamMapping[stream]
    return SecondaryStream.undefined
  }
const parseSubjects = (
    level: EducationLevel,
    rawSubjectsArr: string[]
  ): Subject[] => {
    // let parsedSubjectsArr: Subject[] = []
    const rawSubjectsCombined = rawSubjectsArr.reduce((prev, curr)=>(prev+", "+curr+","),"")
    const rawSubjectsCombinedArr = rawSubjectsCombined.split(",").map((subj)=>subj.trim().toLowerCase())
    // console.log(rawSubjectsCombinedArr)
    switch (level){
        case EducationLevel.JuniorCollege:
            return rawSubjectsCombinedArr.map((subj)=>jcSubjectTextToEnumMapping[subj])
        case EducationLevel.InternationalBaccalaureate:
            return rawSubjectsCombinedArr.map((subj)=>ibSubjectTextToEnumMapping[subj])
        case EducationLevel.UpperSecondary:
            return rawSubjectsCombinedArr.map((subj)=>secondarySubjectTextToEnumMapping[subj])
        case EducationLevel.LowerSecondary:
            return rawSubjectsCombinedArr.map((subj)=>secondarySubjectTextToEnumMapping[subj])
        case EducationLevel.Primary:
            return rawSubjectsCombinedArr.map((subj)=>primarySubjectTextToEnumMapping[subj])
    }
    return []
  }
  
  
export const transformKSGeneralTuteeData = (data: GSheetsData[]): Tutee[] => {
    const parsedTuteeData : Tutee[] = []
    const colIdx = findIdxKSGeneralTutee(data[0])
    if (!colIdx) return parsedTuteeData
    console.log(colIdx)
    data.shift()
    for (let rowData of data){
        const tutee: Tutee = {
            personalData: {},
            subjects: []
          }
        tutee.personalData = {
            index: parseInt(rowData[colIdx.personalData.index]),
            name: rowData[colIdx.personalData.name],
            gender: parseGender(rowData[colIdx.personalData.gender]),
            contact: {
                phone: parseInt(rowData[colIdx.personalData.contact.phone])
            }
        }
        tutee.preferedGender = parseGenderPreference(rowData[colIdx.PreferedGender])
        tutee.isOnFinancialAid = parseFinancialAidStatus(rowData[colIdx.isOnFinancialAid])
        const educationLevelArr = colIdx.EducationLevel.map((idx)=>rowData[idx])
        tutee.educationLevel = parseEducationLevel(educationLevelArr)
        tutee.secondaryStream = parseStream(rowData[colIdx.secondaryStream])
        const subjArr = colIdx.subjects.map((idx)=>rowData[idx])
        tutee.subjects = parseSubjects(tutee.educationLevel, subjArr)           
        parsedTuteeData.push(tutee)
    }
    return parsedTuteeData
  }
  

  