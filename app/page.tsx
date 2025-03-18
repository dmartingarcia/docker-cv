"use client";
//import Link from "next/link"
import { RESUME_DATA } from "@/data/resume-data";
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MailIcon, PhoneIcon, MapPinnedIcon, LinkIcon} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Markdown from 'react-markdown';
const markdownComponents = {
  strong: ({ node, ...props }) => <strong className="not-prose" {...props} />
};

export default function Home() {
    return (
      <div className="bg-background text-foreground font-sans">
        <div className="max-w-3xl mx-auto p-8 md:p-12">
          <div className="grid grid-cols-[1fr_2fr] gap-8 mb-8">
            <div className="flex flex-col items-center md:items-start">
              <Avatar className="rounded-full w-200 h-200 border-solid border-2 border-gray-300 max-h-80 max-w-80">
                <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
                <AvatarImage
                  src={RESUME_DATA.avatarUrl}
                  alt="Profile photo"
                  width={120}
                  height={120}
                  className="rounded-full mb-4"
                  style={{ aspectRatio: "120/120", objectFit: "cover" }}
                  />
              </Avatar>
            </div>
            <div className="space-y-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">{RESUME_DATA.name}</h1>
              </div>
              <div>
                <h2 className="text-lg font-medium mb-1">Contact Details</h2>
                <div className="text-muted-foreground">
                  <p>
                    <MailIcon className="w-4 h-4 inline-block mr-2" />
                    <Link className="ml-6" href={"mailto:" + RESUME_DATA.contact.email.address}>{RESUME_DATA.contact.email.address}</Link>
                    </p>
                  <p>
                    <PhoneIcon className="w-4 h-4 inline-block mr-2" />
                    <Link className="ml-6" href={"tel:" + RESUME_DATA.contact.phone.number}>{RESUME_DATA.contact.phone.number}</Link>
                    </p>
                  <p>
                    <LinkIcon className="w-4 h-4 inline-block mr-2" />
                    <Link className="ml-6" href={RESUME_DATA.social.webpage.url}>{RESUME_DATA.social.webpage.url}</Link>
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-medium mb-1">Location</h2>
                <MapPinnedIcon className="w-4 h-4 inline-block mr-2" />
                <Link className="text-muted-foreground ml-6" href={RESUME_DATA.locationLink}>{RESUME_DATA.location}</Link>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About me</h2>
            <div className="text-muted-foreground prose dark:prose-invert">
              <Markdown components={markdownComponents}>{RESUME_DATA.about_me}</Markdown>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
            <div className="space-y-4">
              {RESUME_DATA.professional_experience.map((pe, index) => {
                return (
                  <div className="mt-4 break-inside-avoid" key={index}>
                    <h3 className="text-lg font-bold mb-1">
                      {pe.title}
                      <span className="ml-5 inline-flex gap-x-1">
                        {pe.badges.map((badge) => (
                          <Badge
                            variant="default"
                            className="align-middle text-xs print:text-[10px] print:leading-tight print:px-1 print:py-0.5"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <p className="text-muted-foreground font-bold"><Link href={pe.link}>{pe.company}</Link> | {pe.start} - {pe.end ?? "Present"}</p>
                    <ul className="list-disc pl-4 text-muted-foreground">
                    </ul>
                    <div className="text-justify text-muted-foreground">
                      <div className="prose dark:prose-invert pl-4 text-muted-foreground mt-2">
                        <Markdown components={markdownComponents}>{pe.description}</Markdown>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mb-8 break-inside-avoid">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="space-y-4">
              {RESUME_DATA.education.map((e, index) => {
                return (
                  <div className="break-inside-avoid" key={index}>
                    <h3 className="text-lg font-medium mb-1">{e.degree}</h3>
                    <h3 className="text-muted-foreground">Specialty on {e.specialty}</h3>
                    <p className="text-muted-foreground">{e.school} | {e.start} - {e.end ?? "Present"}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mb-8 break-inside-avoid">
            <h2 className="text-2xl font-bold mb-4 ">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {RESUME_DATA.skills.map((skill, index) => {
                return (
                  <div className="bg-gray-100 rounded-md p-4" key={index}>
                    <h3 className="text-gray-900 text-lg font-medium mb-2">{skill.title}</h3>
                    <ul className="list-disc pl-4 text-muted-foreground">
                      {skill.elements.map(function (item, index) {
                        return (
                          <li key={index}>
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mb-8 break-inside-avoid">
            <h2 className="text-2xl font-bold mb-4">Archievements</h2>
            <div className="space-y-4">
              {RESUME_DATA.achievements.map((ac, index) => {
                return (
                  <div key={index}>
                    <li className="text-muted-foreground">
                      {ac.title}
                    </li>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }