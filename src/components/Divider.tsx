import CupIcon from '@public/images/cup-fill.svg'
import CameraIcon from '@public/images/camera-fill.svg'

type Props = {
  icon: 'coffee' | 'camera' | 'none'
}
export const Divider: React.FC<Props> = ({ icon }) => {
  return (
    <div className="flex flex-row items-center">
      <hr className="w-full text-wedge border-t-2" />
      {icon === 'coffee' && (
        <CupIcon className="w-12 mx-4 text-wedge" />
      )}
      {icon === 'camera' && (
        <CameraIcon className="w-12 mx-4 text-wedge" />
      )}
      <hr className="w-full text-wedge border-t-2" />
    </div>
  )
}
