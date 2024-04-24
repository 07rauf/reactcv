import './header.css'
function Header() {


  return (
    <>
    <div className='name'>Rauf Nazarov</div>
    <hr></hr>
    <div className='same'>Phone:+994 055 911 77 63</div>
    <div className='same'>Email:raufn759@gmail.com</div>
    <span className='edu'>EDUCATION</span>
    <hr></hr>
    <div className='total'>
      <div className='first'>
    <div>Azerbaijan State Oil and Industry University</div>
    <div>Bachelor of Science in Computer Engineering</div>
    </div>
    <div className='second'>
    <div>Baku,Azerbaijan</div>
    <div>2021 - current</div>
    </div>
    </div>
    <div className='skill'>SKILLS</div>
    <hr></hr>
    <ul className='list1'>
      <li>Programming Languages : <b>HTML5, CSS3, JavaScript, C++ , Matlab </b></li>
      <li>Databases :<b> MySQL</b></li>
      <li>Proficient in using Microsoft Office Suite (<b>Word, Excel, PowerPoint, Outlook</b>)</li>
      <li>Experience with <b>Windows</b> operating system</li>
      <li>Understanding of computer networks</li>
    </ul>
    <div className='ach'>ACHIEVEMENTS and CERTIFICATES</div>
    <hr></hr>
    </>
  )
}

export default Header
