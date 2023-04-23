import Head from 'next/head'
import Image from 'next/image'
import BuyMeACoffeeButton from '../components/BuyMeACoffeeButton'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bruno Lopes</title>
        <meta name="description" content="Bruno Lopes software developer website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <h1 className={styles.hello}>Hello.</h1>
          <h2>I&apos;m Bruno.</h2>
          <p>I work as a software developer freelancer and love doing open source and automating things.</p>
          <p>You can find me on&nbsp;
            <a className="link" href="https://github.com/Briuor">Github</a> and&nbsp;
            <a className="link" href="https://www.linkedin.com/in/bruno-lopes-a64b99207/">Linkedin</a>.
            Send me an <a className="link" href="mailto:contato@brunolopes.dev">email</a>.
          </p>
        </section>
        <section>
          <h2>Code Tools</h2>
          <p>
            <Image className={styles.toolImg} src="https://github.com/get-icon/geticon/raw/master/icons/react.svg" alt="React Icon" width={28} height={28} />
            <Image className={styles.toolImg} src="https://github.com/get-icon/geticon/raw/master/icons/redux.svg" alt="Redux Icon" width={28} height={28} />
            <Image className={styles.toolImg} src="https://github.com/get-icon/geticon/raw/master/icons/vue.svg" alt="Vue Icon" width={28} height={28} />
            <Image className={styles.toolImg} src="https://github.com/get-icon/geticon/raw/master/icons/javascript.svg" alt="Javascript Icon" width={28} height={28} />
            <Image className={styles.toolImg} src="https://github.com/get-icon/geticon/raw/master/icons/typescript-icon.svg" alt="Typescript Icon" width={28} height={28} />
            <Image className={styles.toolImg} src="https://github.com/get-icon/geticon/raw/master/icons/nodejs-icon.svg" alt="Node Icon" width={28} height={28} />
            <Image className={styles.toolImg} src="https://github.com/get-icon/geticon/raw/master/icons/express.svg" alt="Express Icon" width={28} height={28} />
            <Image className={styles.toolImg} src="https://github.com/get-icon/geticon/raw/master/icons/npm.svg" alt="Npm Icon" width={28} height={28} />
            <Image className={styles.toolImg} src="https://github.com/get-icon/geticon/raw/master/icons/python.svg" alt="Python Icon" width={28} height={28} />
            <Image className={styles.toolImg} src="https://github.com/get-icon/geticon/raw/master/icons/django.svg" alt="Django Icon" width={28} height={28} />
            <Image className={styles.toolImg} src="https://github.com/get-icon/geticon/raw/master/icons/postgresql.svg" alt="Postgresql Icon" width={28} height={28} />
            <Image className={styles.toolImg} src="https://github.com/get-icon/geticon/raw/master/icons/firebase.svg" alt="Firebase Icon" width={28} height={28} />
            <Image className={styles.toolImg} src="https://github.com/get-icon/geticon/raw/master/icons/bash.svg" alt="Bash Icon" width={28} height={28} />
            <Image className={styles.toolImg} src="https://github.com/get-icon/geticon/raw/master/icons/git-icon.svg" alt="Git Icon" width={28} height={28} />
            <Image className={styles.toolImg} src="https://github.com/get-icon/geticon/raw/master/icons/github-icon.svg" alt="Github Icon" width={28} height={28} />
            <Image className={styles.toolImg} src="https://github.com/get-icon/geticon/raw/master/icons/linux-tux.svg" alt="Linux Icon" width={28} height={28} />
            <Image className={styles.toolImg} src="https://github.com/get-icon/geticon/raw/master/icons/ubuntu.svg" alt="Ubuntu Icon" width={28} height={28} />
            <Image className={styles.toolImg} src="https://github.com/get-icon/geticon/raw/master/icons/microsoft-windows.svg" alt="Windows Icon" width={28} height={28} />
            <Image className={styles.toolImg} src="https://github.com/get-icon/geticon/raw/master/icons/google-icon.svg" alt="Google Icon" width={28} height={28} />
            <Image className={styles.toolImg} src="https://github.com/get-icon/geticon/raw/master/icons/visual-studio-code.svg" alt="VSCode Icon" width={28} height={28} />
            <Image className={styles.toolImg} src="https://github.com/get-icon/geticon/raw/master/icons/wordpress-icon.svg" alt="Wordpress Icon" width={28} height={28} />
          </p>
        </section>
        <section>
          <h2>Open Source Projects</h2>
          <p>
            <a href="https://github.com/Briuor/rflowz">rflowz</a>
            <Image className={styles.projectImg} src="https://github.com/get-icon/geticon/raw/master/icons/typescript-icon.svg" alt="" width={16} height={16} />
            <br />
            <span>React library for building flowcharts and diagrams.</span>
          </p>
          <p>
            <a href="https://github.com/Briuor/wbm">wbm</a>
            <Image className={styles.projectImg} src="https://github.com/get-icon/geticon/raw/master/icons/javascript.svg" alt="" width={16} height={16} />
            <br />
            <span>wbm is an unofficial API to send bulk messages in whatsapp.</span>
          </p>
        </section>
        <section>
          <h2>Support</h2>
          <p>If you want to buy me a coffee, you can do it here.</p>
          <BuyMeACoffeeButton />
        </section>
        <footer>
          <p className={styles.theEnd}>The End</p>
        </footer>
      </main>
    </>
  )
}
