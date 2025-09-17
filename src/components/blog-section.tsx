import { Card, CardContent } from './ui/card'
import { Clock, Users, Play } from 'lucide-react'
import Image from 'next/image'

const blogPosts = [
  {
    title: 'Learning with Games? Why It\'s Essential for Effective Learning',
    excerpt: 'Examine the joy of games to enhance your learning experience',
    readTime: '5 min read',
    category: 'Learning Tips',
    image: '/api/placeholder/300/200',
    bgColor: 'bg-green-100'
  },
  {
    title: '10 Learning Game Ideas to Keep Learning Fun for Your Kids',
    excerpt: 'Fun games to keep learning to your kids to have fun',
    readTime: '8 min read',
    category: 'Game Ideas',
    image: '/api/placeholder/300/200',
    bgColor: 'bg-blue-100'
  },
  {
    title: 'Fun Activities for Kids',
    excerpt: 'Want to do something outside? Here are fun recommended activities',
    readTime: '6 min read',
    category: 'Activities',
    image: '/api/placeholder/300/200',
    bgColor: 'bg-purple-100'
  }
]

export function BlogSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Read our <span className="text-purple-600 italic">blog</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white rounded-3xl">
              <div className={`${post.bgColor} h-48 relative flex items-center justify-center`}>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Play className="h-8 w-8 text-gray-700" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <button className="text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors flex items-center">
                  Read More
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 13l3 3 7-7" />
                  </svg>
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Materials Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-purple-600 text-white p-8 rounded-3xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                We aim to help children discover the{' '}
                <span className="text-yellow-300 italic">joy of creative</span>{' '}
                learning and grow into well-rounded individuals.
              </h3>
              
              <div className="flex items-center space-x-4 mt-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center">
                      <Users className="h-5 w-5 text-purple-600" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-medium">Happy Students</p>
                  <p className="text-purple-200">Join thousands learning daily</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="bg-gray-100 p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                The learning materials provided are{' '}
                <span className="text-purple-600 italic underline decoration-wavy">enjoyable</span>{' '}
                for children
              </h3>
              <p className="text-gray-600 mb-6">
                Don't worry! Your child can be having a fun time while learning with our 
                materials that are easy to understand.
              </p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
