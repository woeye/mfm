import CupIcon from '@public/images/cup-fill.svg'
import CameraIcon from '@public/images/camera-fill.svg'

const icons = {
  coffee: CupIcon,
  camera: CameraIcon,
}

type Props = {
  icon: 'coffee' | 'camera' | 'none'
}
export const Divider: React.FC<Props> = ({ icon }) => {

  let SvgIcon = null
  if (icon !== 'none') {
    SvgIcon = icons[icon]
  }
  return (
    <div className="flex flex-row items-center">
      <hr className="w-full text-gray-400 border-t-2" />
      {SvgIcon !== null && (
        <SvgIcon className="w-12 mx-4 text-gray-500" />
      )}
      <hr className="w-full text-gray-400 border-t-2" />
    </div>
  )
}
