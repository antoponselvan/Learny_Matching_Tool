// @ts-nocheck
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch } from 'react-redux';
import {selectedTutorMatchesActions} from "../store/selectedTutorMatchesSlice"
import {Stack} from '@mui/material'
import {DataGrid, GridColDef, GridEventListener, GridValueGetterParams} from '@mui/x-data-grid'

const MainMatchingTable = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const matchingTable = useSelector((state)=>state.matchesSummary)
    const columns: GridColDef[] = [
        { field: 'Tutee', headerName: 'Tutee_Name+Id', width: 170 },
        { field: 'Tutor1', headerName: 'Tutor-1', width: 70, type: 'number'},
        { field: 'Tutor2', headerName: 'Tutor-2', width: 70, type: 'number'},
        { field: 'Tutor3', headerName: 'Tutor-3', width: 70, type: 'number'},
        { field: 'Tutor4', headerName: 'Tutor-4', width: 70, type: 'number'},
        { field: 'Tutor5', headerName: 'Tutor-5', width: 70, type: 'number'},
      ];
      console.log(matchingTable[0].tutee.index)
      const rows = matchingTable.map((tuteeDetail, idx)=>{
        return {id:idx, Tutee:(tuteeDetail.tutee.name + " - "+String(tuteeDetail.tutee.index)), Tutor1: tuteeDetail.tutor1.index, Tutor2: tuteeDetail.tutor2.index, Tutor3: tuteeDetail.tutor3.index, Tutor4: tuteeDetail.tutor4.index, Tutor5: tuteeDetail.tutor5.index}
      })
      const handleRowClick : GridEventListener = (params, event, details) => {
        const tuteeIndex = parseInt(params.row.Tutee.split("-")[1])
        const tutee = window.tuteeRawData.find((row)=>(parseInt(row.index) === tuteeIndex))
        const tuteeMatchSummary = matchingTable.find((matchItem)=>(matchItem.tutee.index==tuteeIndex))
        console.log(tutorMatchSummary)
        let tutor1 = window.tuteeRawData.find((row)=>(parseInt(row.index) === parseInt(params.row.Tutor1)))
        tutor1 = {...tutor1, matchingScore:(tuteeMatchSummary.tutor1.matchingScore)} 
        let tutor2 = window.tuteeRawData.find((row)=>(parseInt(row.index) === parseInt(params.row.Tutor2)))
        tutor2 = {...tutor2, matchingScore:tuteeMatchSummary.tutor2.matchingScore}
        let tutor3 = window.tuteeRawData.find((row)=>(parseInt(row.index) === parseInt(params.row.Tutor3)))
        tutor3 = {...tutor3, matchingScore:tuteeMatchSummary.tutor3.matchingScore}
        let tutor4 = window.tuteeRawData.find((row)=>(parseInt(row.index) === parseInt(params.row.Tutor4)))
        tutor4 = {...tutor4, matchingScore:tuteeMatchSummary.tutor4.matchingScore}
        let tutor5 = window.tuteeRawData.find((row)=>(parseInt(row.index) === parseInt(params.row.Tutor5)))
        tutor5 = {...tutor5, matchingScore:tuteeMatchSummary.tutor5.matchingScore}
        // selectedTutorMatchesState slice
        // not yet updated this slice on store - berwyn
        const tuteeInfo = [tutor1, tutor2, tutor3, tutor4, tutor5]
        const selectedTutorMatchesState = {
          tutor: tutee,
          tuteeInfo
        }
        dispatch(selectedTutorMatchesActions.updateSelectedTutorMatches(selectedTutorMatchesState))
        navigate("/details")
      }

  return (
    <>
        <Stack alignItems="center">
        <h2>
        MainMatchingTable
        </h2>
        <DataGrid  rows={rows} columns={columns} onRowClick={handleRowClick}/>
        </Stack>
    </>
  )
}

export default MainMatchingTable