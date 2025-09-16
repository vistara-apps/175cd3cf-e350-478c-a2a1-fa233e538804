import { AppShell } from '@/components/AppShell';
import { StudyDashboard } from '@/components/StudyDashboard';

export default function HomePage() {
  return (
    <AppShell>
      <StudyDashboard />
    </AppShell>
  );
}
