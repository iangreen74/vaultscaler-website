export const metadata = {
  title: 'Team — VaultScaler',
  description: 'Meet the VaultScaler team building Radix Core',
  robots: 'noindex, nofollow',
};

export default function Team() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            VaultScaler is building deterministic AI operations for teams that train and deploy models in the real world. We care about cost, governance, and reproducibility, not hype.
          </p>
          <p className="text-lg text-gray-500">The people behind the Radix Platform</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Ian Green */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-2">Ian Green</h3>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">Co-Founder & CEO</p>
            <p className="text-gray-700 leading-relaxed">
              Ian Green is an AI platform engineer and the founder of VaultScaler. He builds Kubernetes- and Terraform-driven 
              systems that deploy, schedule, and observe GPU workloads across data centers, focused on reliability, security, 
              and cost-aware performance. Previously a DevOps engineer at Vontier and an Electronic Warfare specialist in the 
              New Zealand Defence Force, Ian brings deep CI/CD, AWS, and observability experience to production AI. He holds 
              AWS Solutions Architect and Data Analytics certifications.
            </p>
          </div>

          {/* Ben Pruess */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-2">Ben Pruess, MBA</h3>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">Co-Founder, COO & President</p>
            <p className="text-gray-700 leading-relaxed">
              Ben has been delivering enterprise grade solutions in healthcare tech for 20 years. He has rolled out numerous 
              solutions and has directed a team of 35 while modernizing a $120M platform. Ben is rigorous about delivering 
              value to the customer. He calls Las Vegas home, along with his wife and three boys where he enjoys being sometimes 
              right and always blessed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
