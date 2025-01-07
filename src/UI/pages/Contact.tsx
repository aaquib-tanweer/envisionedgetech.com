import { companyDataConstants } from '@/constants/data/companyData.constant'
import { Input } from '@/UI/shadcn/ui/input'
import { Button } from '@/UI/shadcn/ui/button'

export const Contact = () => {
  return (
    <div className="h-[50vh] flex flex-col justify-center items-center gap-8">
      <h1 className="lg:text-5xl text-xl font-bold bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300 bg-clip-text text-transparent">
        Let's <span className="underline">create</span> something together.
      </h1>
      <div className="flex gap-2">
        <Input placeholder="info@envisionedgetech.com" className="border-blue-500/20" />
        <a href={`mailto:${companyDataConstants.email}`}>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">Send Email</Button>
        </a>
      </div>
    </div>
  )
}
