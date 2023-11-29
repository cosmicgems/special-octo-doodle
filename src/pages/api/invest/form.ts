import connectDB from "../../../../lib/connectProposalDB";
import { Client } from "../../../../lib/models";
import { NextApiRequest, NextApiResponse } from "next";
import sgMail from '@sendgrid/mail';



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        try {
            await connectDB();
            const apiKey: string = process.env.SENDGRID_API_KEY!;
            sgMail.setApiKey(apiKey);
            console.log(process.env.SENDGRID_API_KEY);
            console.log(req.body);
            

            const {
                first_name,
                last_name,
                email,
                notes,
                date,
                time
            } = req.body.form

            let client = await new Client();
            client.first_name = first_name;
            client.last_name = last_name;
            client.email = email;
            client.notes = notes
            client.save();

            console.log(client);
            
            const htmlContent = `
            <html>
                <body style="background-color: #f0f0f0; padding: 5vh 15vh;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                        <td align="center">
                            <h1 style="color: #333; margin-bottom: 20px;">Looking forward to working with you ${first_name}!</h1>
                            <p style="color: #555;">You'll be contacted within 24 hours to coordinate deposit, and gather any additional requirements for the project.</p>
                            <p style="color: #555;">${first_name} ${last_name}</p>
                            <p style="color: #555;">Date: ${date}, ${time}</p>
                            <p style="color: #555;">Notes: ${notes}</p>
                        </td>
                        </tr>
                    </table>
                </body>
            </html>
            `;
            
            const recipients = [email, "maliekjdavis24@gmail.com"]
            const msg = {
                to: recipients,
                from: 'maliekjdavis24@gmail.com',
                subject: `Website Proposal Confirmation`,
                html: htmlContent, 
            };
    
            
    
            const messageSent = await sgMail.send(msg);

            
            res.status(200).json({message: "Successful", email:msg})
        } catch (error) {
            res.status(500).json({message: "There was an error with your registration. Please try again."})
        }
    }
}