import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { nome, email, telefone, assunto, mensagem } = body

        // Validate required fields
        if (!nome || !email || !mensagem) {
            return NextResponse.json(
                { error: 'Nome, email e mensagem são obrigatórios.' },
                { status: 400 }
            )
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Email inválido.' },
                { status: 400 }
            )
        }

        // Create transporter
        // For production, use environment variables:
        // SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        })

        // Email content
        const mailOptions = {
            from: `"Website A.M. Brito" <${process.env.SMTP_USER}>`,
            to: 'a.britocarpintaria@gmail.com',
            replyTo: email,
            subject: `[Website] ${assunto || 'Novo Contacto'} - ${nome}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: #050505; padding: 30px; text-align: center;">
                        <h1 style="color: #C19A6B; margin: 0; font-size: 24px; letter-spacing: 3px;">A.M. BRITO</h1>
                        <p style="color: #666; margin: 5px 0 0 0; font-size: 12px;">Carpintaria & Design</p>
                    </div>
                    
                    <div style="background: #0a0a0a; padding: 30px; color: #e0e0e0;">
                        <h2 style="color: #C19A6B; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 20px;">
                            Nova Mensagem do Website
                        </h2>
                        
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #888; width: 100px;">Nome:</td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #fff;">${nome}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #888;">Email:</td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #fff;">
                                    <a href="mailto:${email}" style="color: #C19A6B;">${email}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #888;">Telefone:</td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #fff;">${telefone || 'Não indicado'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #888;">Assunto:</td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #222; color: #fff;">${assunto || 'Geral'}</td>
                            </tr>
                        </table>
                        
                        <div style="margin-top: 25px;">
                            <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">Mensagem:</p>
                            <div style="background: #111; padding: 20px; border-left: 3px solid #C19A6B; color: #ccc; line-height: 1.6;">
                                ${mensagem.replace(/\n/g, '<br>')}
                            </div>
                        </div>
                    </div>
                    
                    <div style="background: #050505; padding: 20px; text-align: center;">
                        <p style="color: #666; font-size: 11px; margin: 0;">
                            Esta mensagem foi enviada através do formulário de contacto do website.
                        </p>
                    </div>
                </div>
            `,
        }

        // Send email
        await transporter.sendMail(mailOptions)

        return NextResponse.json(
            { success: true, message: 'Mensagem enviada com sucesso!' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json(
            { error: 'Erro ao enviar mensagem. Tente novamente.' },
            { status: 500 }
        )
    }
}
