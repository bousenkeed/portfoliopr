import s from './home.module.css';


function Home() {
  return (
    <div className={s.App}>
      <div className={s.title_container}>
        <h1 className={s.title}>
          Приветствую, меня зовут Антон
        </h1>
        <h1 className={s.title2}>
          Вы находитесь на сайте выпускника Синергии
        </h1>
        <h1 className={s.title3}>
        Я прохошел курс в университете Синергия "Веб-дизайн и разработка сайтов". 
        Мне интересно уйти в специальность, в которой можно расти большую часть своей жизни.

        </h1>
      </div>
    </div>
  )
}

export default Home;