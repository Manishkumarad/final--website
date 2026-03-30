export const runtime = 'nodejs'

export async function POST(req) {
  try {
    const pdfParse = (await import('pdf-parse')).default

    const formData = await req.formData()
    const file = formData.get('file')

    if (!file) {
      return Response.json({ error: 'No file uploaded' }, { status: 400 })
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    const data = await pdfParse(buffer)

    return Response.json({ text: data.text })
  } catch (error) {
    console.error(error)
    return Response.json({ error: 'Failed to parse PDF' }, { status: 500 })
  }
}
