import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs'
import * as path from 'path'
import { config } from 'dotenv'

config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseServiceKey)

const BUCKET_NAME = 'images'

const images = [
  { file: 'hero-skyline.jpg', path: 'public/images/hero-skyline.jpg' },
  { file: 'benefits-silk.jpg', path: 'public/images/benefits-silk.jpg' },
  { file: 'apply-office.jpg', path: 'public/images/apply-office.jpg' },
  { file: 'geometric-pattern.jpg', path: 'public/images/geometric-pattern.jpg' },
]

async function main() {
  // Create bucket if not exists
  const { data: buckets } = await supabase.storage.listBuckets()
  const bucketExists = buckets?.some(b => b.name === BUCKET_NAME)
  
  if (!bucketExists) {
    const { error } = await supabase.storage.createBucket(BUCKET_NAME, {
      public: true,
      fileSizeLimit: 5242880, // 5MB
    })
    if (error) {
      console.error('Error creating bucket:', error)
      return
    }
    console.log('✓ Bucket created:', BUCKET_NAME)
  } else {
    console.log('✓ Bucket exists:', BUCKET_NAME)
  }

  // Upload images
  for (const img of images) {
    const filePath = path.join(process.cwd(), img.path)
    const fileBuffer = fs.readFileSync(filePath)
    
    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(img.file, fileBuffer, {
        contentType: 'image/jpeg',
        upsert: true,
      })
    
    if (error) {
      console.error(`Error uploading ${img.file}:`, error)
    } else {
      const { data } = supabase.storage.from(BUCKET_NAME).getPublicUrl(img.file)
      console.log(`✓ Uploaded ${img.file}: ${data.publicUrl}`)
    }
  }
}

main()
