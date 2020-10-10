
import styles from '../styles.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home(props) {
  return (
    <div className={styles.hello}>
      <Header/>

      <h2>{props.users.title}</h2>
      <img src={props.users.img} />
      <h2>Previous 10</h2>
      
      <Footer users={props.users.num}/>
    </div>
  )
}

export async function getServerSideProps(){
  
  const res = await fetch('https://xkcd.com/2369/info.0.json');
  const data = await res.json();

  return {props : {users:data}};

}