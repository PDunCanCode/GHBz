import React from 'react'

export default class Popular extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            selectedLanguage: 'ALL'
        }
    

        this.updateLanguage = this.updateLanguage.bind(this)
    }
    updateLanguage (selectedLAnguage) {
        this.setState({
            selectedLanguage
        })
    }
  render() {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

    return (
      <ul className='flex-center'>
        {languages.map((language) => (
          <li key={language}>
            <button className='btn-clear nav-link'
            style={language === this.state.selectedLanguage ? { color: 'rgb(187, 46, 31)' } : null }
                onCLick={()=>this.updateLanguage(language)}>
                
              {language}
            </button>
          </li>
        ))}
      </ul>
    )
  }
}