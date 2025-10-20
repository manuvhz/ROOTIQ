import React from 'react';

const references = [
    { title: 'Decision Trees in Machine Learning', url: 'https://www.geeksforgeeks.org/decision-tree/' },
    { title: 'Random Forest Algorithm', url: 'https://www.javatpoint.com/machine-learning-random-forest-algorithm' },
    { title: 'Scikit-learn: Decision Trees', url: 'https://scikit-learn.org/stable/modules/tree.html' },
    { title: 'StatQuest: Decision Trees, Clearly Explained', url: 'https://www.youtube.com/watch?v=7VeUPuFGJHk' },
    { title: 'Breiman, L. (1984). Classification and Regression Trees.', url: 'https://www.taylorfrancis.com/books/mono/10.1201/9781315139470/classification-regression-trees-leo-breiman' }
];

const ReferencesSection: React.FC = () => {
    return (
        <section className="w-full py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-8">
                    Recursos y Referencias
                </h2>
                <div className="text-left bg-black/20 dark:bg-white/5 p-8 rounded-lg">
                    <ul className="space-y-4">
                        {references.map((ref, index) => (
                            <li key={index} className="border-b border-gray-700/50 pb-2">
                                <a 
                                    href={ref.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="group transition-colors duration-300 dark:hover:text-[#00ffae] hover:text-[#8b5cf6]"
                                >
                                    {ref.title}
                                    <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ReferencesSection;
