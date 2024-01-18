import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public', 'photo.txt')

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8')

    const lines = fileContent.split('\n')
    const objects = lines.map((line) => {
      if (line.trim() !== '') {
        try {
          return { photo: `${line}.jpg`, name: `Tarło ${line.slice(18)}` }
        } catch (parseError) {
          console.error('Błąd podczas parsowania linii:')
          return null
        }
      } else {
        console.error('Pusta linia pominięta.')
        return null
      }
    })

    const validObjects = objects.filter(
      (object) => object !== null && object !== undefined,
    )

    res.status(200).json(validObjects)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
