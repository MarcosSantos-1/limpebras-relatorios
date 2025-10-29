import { NextRequest, NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const R2_ENDPOINT = 'https://3748a7a88f3f2e8b3806b8340bf6fe1a.r2.cloudflarestorage.com';
const R2_BUCKET = 'limpebras-relatorios';
const R2_ACCOUNT_ID = process.env.NEXT_PUBLIC_R2_ACCOUNT_ID || process.env.R2_ACCOUNT_ID || '';
const R2_ACCESS_KEY_ID = process.env.NEXT_PUBLIC_R2_ACCESS_KEY_ID || process.env.R2_ACCESS_KEY_ID || '';
const R2_SECRET_ACCESS_KEY = process.env.NEXT_PUBLIC_R2_SECRET_ACCESS_KEY || process.env.R2_SECRET_ACCESS_KEY || '';

// Criar cliente S3 configurado para R2
const s3Client = new S3Client({
  region: 'auto',
  endpoint: R2_ENDPOINT,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { file, relatorioId, fotoIndex, folder, contentType } = await request.json();

    if (!file || !relatorioId) {
      return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 });
    }

    // Extrair base64 (remover prefixo data:image/...)
    const base64Data = file.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    // Gerar key único
    const timestamp = Date.now();
    const key = `${folder}/${relatorioId}/foto_${fotoIndex}_${timestamp}.jpg`;

    // Upload para R2
    const command = new PutObjectCommand({
      Bucket: R2_BUCKET,
      Key: key,
      Body: buffer,
      ContentType: contentType || 'image/jpeg',
    });

    await s3Client.send(command);

    // URL pública do R2
    const url = `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com/${R2_BUCKET}/${key}`;

    return NextResponse.json({
      url,
      key,
      size: buffer.length,
    });
  } catch (error) {
    console.error('Erro no upload R2:', error);
    return NextResponse.json(
      { error: 'Falha no upload', details: String(error) },
      { status: 500 }
    );
  }
}

