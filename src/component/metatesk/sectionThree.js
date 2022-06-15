import React from 'react'

const sectionThree = () => {


    let firstLine = [];
    firstLine[7] = 'value';
    let sechondLine = [];
    sechondLine[8] = 'value';
    let thirdLine = [];
    thirdLine[9] = 'value';
    let fourthLine = [];
    fourthLine[10] = 'value';
    let fifthLine = [];
    fifthLine[11] = 'value';



    function array(params) {
      for (let i = 0; i < params.length; i++) {
        params[i] = 'Metatesk'
      }
    }
    array(firstLine);
    array(sechondLine);
    array(thirdLine);
    array(fourthLine);
    array(fifthLine)




  return (
    <article className='section-Three'>
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              {/* first */}
              <div className='line' >
                {
                  firstLine.map((word,i) =>{

                    return(
                      <span key={i}>
                        {word}
                      </span>
                    )
                    
                  })
                }
              </div>
              {/* sechond */}
              <div className='line' >
                {
                  sechondLine.map((word,i) =>{

                    return(
                      <span key={i}>
                        {word}
                      </span>
                    )
                    
                  })
                }
              </div>
              {/* third */}
              <div className='line' >
                {
                  thirdLine.map((word,i) =>{

                    return(
                      <span key={i}>
                        {word}
                      </span>
                    )
                    
                  })
                }
              </div>
              {/* fourth */}
              <div className='line' >
                {
                  fourthLine.map((word,i) =>{

                    return(
                      <span key={i}>
                        {word}
                      </span>
                    )
                    
                  })
                }
              </div>
              {/* fifth */}
              <div className="line">
                {
                  fifthLine.map((word,i) =>{

                    return(
                      <span key={i}>
                        {word}
                      </span>
                    )
                    
                  })
                }
              </div>
              {/* center */}
              {/* fourth */}
              <div className='line' >
                {
                  fourthLine.map((word,i) =>{

                    return(
                      <span key={i}>
                        {word}
                      </span>
                    )
                    
                  })
                }
              </div>
              {/* third */}
              <div className='line' >
                {
                  thirdLine.map((word,i) =>{

                    return(
                      <span key={i}>
                        {word}
                      </span>
                    )
                    
                  })
                }
              </div>
              {/* sechond */}
              <div className='line' >
                {
                  sechondLine.map((word,i) =>{

                    return(
                      <span key={i}>
                        {word}
                      </span>
                    )
                    
                  })
                }
              </div>
              {/* first */}
              <div className='line' >
                {
                  firstLine.map((word,i) =>{

                    return(
                      <span key={i}>
                        {word}
                      </span>
                    )
                    
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default sectionThree