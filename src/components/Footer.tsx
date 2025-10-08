import { Divider } from './Divider'

export const Footer: React.FC = () => {
  return (
    <div className="grid grid-cols-7 gap-6 mb-8 mt-16 pt-10">
      <div className="col-span-7">
        <Divider icon="none" />
        <p className="mt-1 text-wedge text-sm">
          Created with PayloadCMS, tailwind.css and lots of coffee. &copy; 2025 by Lars Hoss.
        </p>
      </div>
    </div>
  )
}
