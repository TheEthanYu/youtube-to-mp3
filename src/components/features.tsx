import { PlayCircle, Brain, Users, Gamepad2 } from 'lucide-react'
import { Card, CardContent } from './ui/card'

const features = [
  {
    icon: PlayCircle,
    title: 'Fun Quiz',
    description: 'Test your understanding with a short but fun quizzes!',
    color: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    icon: Brain,
    title: 'Creative Activities',
    description: 'Discover various activities such as cooking, crafting, and science',
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    icon: Gamepad2,
    title: 'Learn with Games',
    description: 'Learn something new while your kids playing games',
    color: 'from-yellow-400 to-yellow-600',
    bgColor: 'bg-yellow-100'
  }
]

export function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-purple-600 italic">interactive</span> features
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className={`${feature.bgColor} border-0 rounded-3xl p-6 hover:scale-105 transition-transform duration-300`}
              >
                <CardContent className="p-0 text-center">
                  <div className="mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
