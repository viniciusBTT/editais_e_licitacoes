import Header from '@/components/header/header';
import UserTable from '@/components/usertable/usertable';
import Footer from '@/components/footer/footer';
export const metadata = {
  title: 'Editais e Licitações - Prefeitura do Município de Francisco Morato',
  description: 'Generated by create next app',
}


export default function Home() {
  return (
    <>
      <Header/>
      <main className='flex flex-col'>
        <UserTable />
      </main>
      <Footer />
      {/* <BreadCrumbs /> */}
      {/* <hr className='mt-3 ms-5'></hr> */}
    </>
  )
}
