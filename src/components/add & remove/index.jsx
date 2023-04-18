import React from 'react'

function AddandRemove() {

    const [ surguries, setSurguries ] = useState([1]);
	
	const handleOnSurgery = () => {
		
		setSurguries([  ...surguries, surguries.length + 1 ])
	} 

	const handleCloseSurgery = (index) => {
		if(surguries !==1){
			const values=[...surguries]
			values.splice(index , 1)
			setSurguries(values)
		}
	}

  return (
    <div>
                <Grid item xs={12} marginBottom={3}>
                  <Typography variant='body1'> Add Surgery </Typography>
                </Grid>
                  {
                  surguries.map((item ,index) => (
                    <Grid key={item.id} item xs={6} marginBottom={3}>
                    <TextFieldWrapper variant='contained' name={`specialSurguries ${index+1}`} label={`Surgery ${index+1}`}/>
                  </Grid>
                  ))
                  }
                <Grid item xs={12} display={'flex'} flexDirection={'row'} marginBottom={3}>
                    <Grid item sx={{marginRight:2}}>
                      <Button onClick={handleOnSurgery} variant='contained' color='success'> Add + </Button>
                    </Grid>
                    <Grid item>
                      <Button onClick={handleCloseSurgery} variant='contained' color='error'> Remove </Button>
                    </Grid>
                </Grid>
    </div>
  )
}

export default AddandRemove
