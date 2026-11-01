import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { PageTitle } from '../../components/common/PageTitle';
import { Button } from '../../components/common/Button';
import { useNavigation } from '../../context/useNavigation';

export const PlaceholderView = ({ title, description, icon: Icon }) => {
  const { setCurrentPage } = useNavigation();

  return (
    <div className="space-y-6">
      <PageTitle
        title={title}
        subtitle={description}
        actions={
          <Button
            variant="secondary"
            size="sm"
            icon={ArrowLeft}
            onClick={() => setCurrentPage('dashboard')}
          >
            Back to Dashboard
          </Button>
        }
      />

      <div className="bg-white rounded-lg border border-gray-100 shadow-xs p-8 text-center max-w-xl mx-auto my-12">
        <div className="w-12 h-12 bg-green-50 text-[#1E5128] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#1E5128]/20">
          {Icon ? <Icon className="w-6 h-6" /> : <CheckCircle2 className="w-6 h-6" />}
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title} Module</h3>
        <p className="text-xs text-gray-500 mb-6 leading-relaxed">
          This section is a dedicated module within the INTRAPRENEUR design system. Clean, modular, and ready for extension.
        </p>
        <Button
          variant="primary"
          size="sm"
          onClick={() => setCurrentPage('dashboard')}
          className="bg-[#1E5128] hover:bg-[#163f20]"
        >
          Return to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default PlaceholderView;
