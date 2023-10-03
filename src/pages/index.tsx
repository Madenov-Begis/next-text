import { Button } from '@/components/button'
import MainLayout from '@/layout/main-layout'
import { ReactElement, isValidElement } from 'react'

function Home() {
  return (
    <div className="pt-14">
      <div className="container w-full px-7">
        <h1 className="text-2xl font-bold leading-7 mb-20">
          Выберите действие
        </h1>
        <div className="flex flex-col space-y-5">
          <Button
            type="button"
            text="Login"
            from="#FFC543"
            to="#FF8412"
            shadow="[0_4px_8px_0px_rgba(67, 41, 124, 0.25)]"
          />
          <Button
            type="button"
            text="Login"
            from="#FFC543"
            to="#FF8412"
            shadow="[0_4px_8px_0px_rgba(67, 41, 124, 0.25)]"
          />
        </div>
      </div>
    </div>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>
}

export default Home
