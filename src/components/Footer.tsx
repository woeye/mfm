import { Divider } from "./Divider"

export const Footer: React.FC = () => {
  return (
    <div className="mb-8 pt-10">
      <Divider icon="none"/>
      <p className="mt-1 text-gray-500 text-sm">
        Created with PayloadCMS, tailwind.css and lots of coffee. &copy; 2025 by Lars Hoss.
      </p>
    </div>
  )
}
