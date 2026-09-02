'use client';

import { useMemo } from 'react';
import { ContentSection } from '@/components/ContentSection';
import { FeatureCards } from '@/components/FeatureCards';
import type { FeatureCardItem } from '@/components/FeatureCards';
import { CarouselBase, CarouselCard } from '@/components/CarouselBase';
import { LabelBase } from '@/components/LabelBase';
import { ProjectInfoCard } from '@/components/ProjectInfoCard';
import { ContactForm } from '@/features/contact';
import { ButtonBase } from '@/components/ButtonBase';
import { DownloadIcon } from '@/lib/icons/DownloadIcon';
import { getSocialLink, toSocialLinks } from '@/lib/social';
import { getExperienceIcon, getSkillIcon } from '@/lib/icons/mappings';
import type { HomePageProps } from './types';
import { ParticleNetwork } from '@/components/ParticleNetwork';

export function HomePage({ data, downloadCvHref }: HomePageProps) {
  const { skills, experience, projects, settings } = data;

  const linkedinUrl = getSocialLink(settings?.socials, 'linkedin');

  const featureAction = useMemo(
    () => ({
      title: 'Reach out to me',
      href: linkedinUrl ?? '#',
      linkText: 'To LinkedIn',
    }),
    [linkedinUrl],
  );

  const featureItems = useMemo<FeatureCardItem[]>(
    () =>
      (experience ?? []).map((entry) => ({
        id: entry.name,
        icon: getExperienceIcon(entry.name),
        title: entry.title,
        description: entry.description,
      })),
    [experience],
  );

  return (
    <main className="mt-35 w-full min-w-0 space-y-30 pb-20 lg:pb-60">
      <ParticleNetwork className="absolute top-0 left-0 w-full h-[60%]" />
      <ContentSection id="intro" className="relative scroll-mt-50">
        <div className="relative flex w-full gap-x-25">
          <div className="max-w-175 space-y-6">
            <p className="text-eyebrow text-muted">{settings?.greeting}</p>
            <h1 className="font-bold text-[60px] xs:text-[80px] leading-none bg-clip-text text-heading" style={{ fontFamily: 'var(--font-roboto-condensed)' }}>{settings?.headline}</h1>
            <div className="space-y-4 text-muted max-w-200">
              {(settings?.introParagraphs ?? []).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {downloadCvHref && (
              <div className="space-y-3 md:w-[50%]">
                <ButtonBase href={downloadCvHref} target="_blank" text="Download my CV" mode="primary" size="lg" icon={DownloadIcon} />
              </div>
            )}
            <div className="md:w-[50%]">
              <ButtonBase href="#contacts" text="Get in touch" mode="secondary" className="w-full" size="lg" />
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection id="experience">
        <div className="space-y-12">
          <div className="space-y-3">
            <span className="block h-1 w-12 rounded-full bg-accent" />
            <h2 className="text-title xs:text-heading font-bold tracking-tight">
              More details about how I can help you
            </h2>
            <p className="text-muted">
              Where I have worked and what I built along the way.
            </p>
          </div>
          <FeatureCards
            className=""
            items={featureItems}
            action={featureAction}
          />
        </div>
      </ContentSection>

      <ContentSection id="skills">
        <div className="space-y-3">
          <span className="block h-1 w-12 rounded-full bg-accent" />
          <h2 className="text-title xs:text-heading font-bold tracking-tight">Skills</h2>
          <p className="text-muted">
            Technologies I know
          </p>
        </div>

        <CarouselBase navigation autoplay autoplayDelay={3000}>
          {(skills ?? []).map((skill) => (
            <CarouselCard
              key={skill._id}
              icon={getSkillIcon(skill.title)}
              title={skill.title}
              description={skill.description}
            >
              <div className="mt-4 flex flex-wrap gap-2">
                {(skill.labels ?? []).map((item) => (
                  <LabelBase key={item.text} text={item.text} color={item.color} />
                ))}
              </div>
            </CarouselCard>
          ))}
        </CarouselBase>
      </ContentSection>

      <ContentSection id="works">
        <span className="block h-1 w-12 rounded-full bg-accent" />
        <div className="space-y-10">
          <h2 className="text-title xs:text-heading font-bold tracking-tight">
            I&#39;m currently working on
          </h2>

          {(projects ?? []).map((project) => (
            <ProjectInfoCard
              key={project._id}
              title={project.title}
              description={project.description}
              features={project.steps ?? []}
              href={project.githubUrl ?? '#'}
              videoSrc={project.videoUrl}
            />
          ))}
        </div>
      </ContentSection>

      <ContentSection id="contacts">
        <span className="block h-1 w-12 rounded-full bg-accent" />
        <h2 className="text-heading font-bold tracking-tight">Get in touch</h2>
        <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-y-8 lg:gap-y-0 lg:space-x-6">
          <div className="space-y-8 mb-0">
            <p className="text-muted">Whether you have a project, an opportunity,<br/> or simply want to connect — drop me a message.</p>
            <div>
              <h3 className="font-semibold text-2xl mb-5">Socials:</h3>
              <ul className="flex flex-col gap-3">
                {toSocialLinks(settings?.socials).map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target={link.target}
                        rel="noreferrer"
                        className="flex items-center gap-3 text-muted transition-colors hover:text-foreground"
                      >
                        <Icon className="h-5 w-5" />
                        <span className="text-lg font-medium">{link.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="lg:w-[55%] lg:mt-0">
            <h3 className="font-semibold text-2xl mb-5">Drop a message</h3>
            <ContactForm className="" contactEmail={settings?.email} />
          </div>
        </div>
      </ContentSection>
    </main>
  );
}
