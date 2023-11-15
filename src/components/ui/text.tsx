import { myFont } from '@/app/ui/fonts'

type TextProps = {
  children: string
  size: 'lg' | '9xl'
}

export const Text = ({ children, size }: TextProps) => {
  const textSize = `text-${size}`
  return <h1 className={[myFont.className, textSize].join(' ')}>{children}</h1>
}
