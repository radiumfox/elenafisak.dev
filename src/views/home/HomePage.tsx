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
import { getSocialLink } from '@/lib/social';
import { getExperienceIcon, getSkillIcon } from '@/lib/icons/mappings';
import type { HomePageProps } from './types';

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
    <main className="mt-35 w-full min-w-0 px-2 xs:px-4 sm:px-6 md:px-6 lg:px-12 space-y-30 pb-20 lg:pb-60">
      <ContentSection id="intro" className="relative scroll-mt-50">
        <div className="relative flex w-full gap-x-[100px]">
          <div className="max-w-[600px] space-y-3">
            <p className="text-eyebrow text-muted">{settings?.greeting}</p>
            <h1 className="font-bold text-[60px] leading-none bg-clip-text text-accent ">{settings?.headline}</h1>
            <div className="space-y-4 text-muted max-w-200">
              {(settings?.introParagraphs ?? []).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {downloadCvHref && (
              <div className="lg:hidden pt-2 space-y-3">
                <ButtonBase href={downloadCvHref} target="_blank" text="Download my CV" mode="primary" icon={DownloadIcon} />
              </div>
            )}
            <div className="lg:hidden pt-2 w-full">
              <ButtonBase href="#contacts" text="Get in touch" mode="secondary" className="w-full" />
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection id="experience">
        <div className="space-y-12">
          <div className="space-y-3">
            <span className="block h-1 w-12 rounded-full bg-accent" />
            <h2 className="text-heading font-bold tracking-tight">
              More details about how I can help you
            </h2>
            <p className="text-muted">
              Where I have worked and what I built along the way.
            </p>
          </div>
          <FeatureCards
            items={featureItems}
            action={featureAction}
          />
        </div>
      </ContentSection>

      <ContentSection id="skills">
        <div className="space-y-3">
          <span className="block h-1 w-12 rounded-full bg-accent" />
          <h2 className="text-heading font-bold tracking-tight">Skills</h2>
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
        <div className="space-y-10">
          <span className="block h-1 w-12 rounded-full bg-accent" />
          <h2 className="text-heading font-bold tracking-tight">
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
        <div className="relative w-full xs:h-182.5 space-y-6 xs:px-6 xs:py-10 border-0 xs:border border-line rounded-2xl overflow-hidden">
          <div className="relative space-y-4">
            <h1 className="text-heading font-bold tracking-tight">Get in touch</h1>
            <p className="text-muted">Whether you have a project, an opportunity,<br/> or simply want to connect — drop me a message.</p>
            <div className="flex flex-col gap-8 xl:flex-row xl:gap-6">
              <ContactForm className="" contactEmail={settings?.email} />
            </div>
          </div>
        </div>
      </ContentSection>
    </main>
  );
}
