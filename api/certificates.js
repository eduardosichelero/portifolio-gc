import cors from 'cors';

let certificates = [
 {
   id: '1',
   title: 'AWS Certified Solutions Architect',
   date: '10 de outubro de 2024',
   issuer: 'Amazon',
   progress: 100,
   externalUrl: 'https://www.credly.com/badges/exemplo-aws'
 },
 {
   id: '2',
   title: 'Microsoft Azure Fundamentals',
   date: 'em andamento',
   issuer: 'Microsoft',
   progress: 30,
   externalUrl: 'https://learn.microsoft.com/pt-br/certifications/exemplo-azure'
 },
 {
   id: '3',
   title: 'Linux Professional Institute LPIC-1',
   date: 'em andamento',
   issuer: 'LPI',
   progress: 50,
   externalUrl: 'https://www.lpi.org/pt-br/our-certifications/exemplo-lpic'
 },
 {
   id: '4',
   title: 'Google Cybersecurity Professional',
   date: 'em andamento',
   issuer: 'Google',
   progress: 40,
   externalUrl: 'https://www.coursera.org/professional-certificates/google-cybersecurity'
 },
 {
   id: '5',
   title: 'One Oracle Next Education T6',
   date: '16 de julho de 2024',
   issuer: 'Oracle',
   progress: 100,
   externalUrl: 'https://www.oracle.com/br/education/oracle-next-education/'
 },
 {
   id: '6',
   title: 'Introduction to Generative AI',
   date: '07 de dezembro de 2023',
   issuer: 'Google',
   progress: 100,
   externalUrl: 'https://cloud.google.com/training/generative-ai'
 },
 {
   id: '7',
   title: 'Advent of Cyber 2024',
   date: 'em andamento',
   issuer: 'TryHackMe',
   progress: 68,
   externalUrl: 'https://tryhackme.com/christmas'
 }
];


export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');


  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    return res.status(200).json(certificates);
  }
  if (req.method === 'POST') {
    let body = req.body;
    if (!body || Object.keys(body).length === 0) {
      try { body = JSON.parse(req.body); } catch {}
    }
    const newCert = { id: Date.now().toString(), ...body };
    certificates.push(newCert);
    return res.status(201).json(newCert);
  }
  return res.status(405).json({ error: 'Método não permitido' });
}