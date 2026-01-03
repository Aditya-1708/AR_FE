import React from 'react';

const CertificationCard = ({ certification }) => {
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    amber: 'bg-amber-500',
    orange: 'bg-orange-500',
    purple: 'bg-purple-500',
    indigo: 'bg-indigo-500'
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Certification Header */}
      <div className="text-center mb-6">
        <div className={`w-20 h-20 ${colorClasses[certification.color]} rounded-full flex items-center justify-center mx-auto mb-4`}>
          <i className={`${certification.icon} text-3xl text-white`}></i>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{certification.name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{certification.description}</p>
      </div>

      {/* Certification Details */}
      <div className="space-y-3 mb-6">
        {Object.entries(certification.details).map(([key, value]) => (
          <div key={key} className="flex justify-between items-start py-2 border-b border-gray-100 last:border-b-0">
            <span className="text-gray-500 text-sm capitalize font-medium">
              {key.replace(/([A-Z])/g, ' $1')}:
            </span>
            <span className="text-gray-900 font-semibold text-sm text-right max-w-[60%]">{value}</span>
          </div>
        ))}
      </div>

      {/* Benefits/Programs/Compliance */}
      {(certification.benefits || certification.programs || certification.compliance) && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">
            {certification.benefits ? 'Benefits:' : 
             certification.programs ? 'Programs:' : 
             'Compliance:'}
          </h4>
          <ul className="space-y-2">
            {(certification.benefits || certification.programs || certification.compliance).map((item, index) => (
              <li key={index} className="flex items-start text-xs text-gray-600">
                <i className="fas fa-star text-amber-500 mr-2 mt-0.5 flex-shrink-0"></i>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Action Button */}
      <button className={`w-full ${colorClasses[certification.color]} hover:opacity-90 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200`}>
        <i className="fas fa-download mr-2"></i>
        View Certificate
      </button>
    </div>
  );
};

export default CertificationCard;