import { FormData } from 'app/forms/types';
import FormRenderer from 'components/FormRenderer';

const CreateFormComponent = ({ formData }: { formData: FormData }) => (
  <div className="w-full h-full border-4 p-4 m-4 shadow-lg shadow-[#f5f5f5]">
    <FormRenderer formData={formData} />
  </div>
);
export default CreateFormComponent;
